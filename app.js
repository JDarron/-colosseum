
const express = require('express')
	, bodyParser = require('body-parser')
	, sequelize = require('sequelize')
	, logger = require('morgan')

	// CONTROLLERS
	// , authCtrl = require('./app_api/controllers/auth/authCtrl')

	// DB
	, models = require('./app_api/models')

	// ROUTES
	, routes = require('./app_api/routes/index.routes')

	, PORT = process.env.PORT || 3001
	// ENVIRONMENT
	, isDev = process.env.NODE_ENV === 'development'


	, app = express();

/*  
    =====================================================================================
    MIDDLEWARE
    ===================================================================================== 
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger('dev'));
app.use("/api", routes);
if (isDev) {
	app.use(express.static('app_client/public'));
}
app.use(express.static('app_client/build'));

/*  
    =====================================================================================
    SYNC & START SERVERS
    ===================================================================================== 
*/
models
	.sequelize
	.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
	.then(function (results) {
		models.sequelize.sync({ force: true }).then(function () {
			app.listen(PORT, function () {
				console.log(`App listening on PORT ${PORT}`);
			}); // END LISTEN
		}); // END SYNC
	}); 