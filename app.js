
require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// DB
const models = require('./app_api/models');
const jwt = require('express-jwt');
// AUTH ROUTES
const authRoutes = require("./app_api/routes/auth/auth.routes");
// API ROUTES
const routes = require('./app_api/routes/index.routes');
const PORT = process.env.PORT || 3001;
// ENVIRONMENT
const isDev = process.env.NODE_ENV === 'development';
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger('dev'));

// JWT SECRET
const auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload'
});

// ALL UNKNOWN ROUTES
app.get("*", function (req, res) {
	res.render("404");
});

// UN-PROTECTED ROUTES
app.use("/auth", authRoutes);
app.use(auth);
// PROTECTED ROUTES
app.use("/api", routes);

// PRODUCTION ENVIRONMENT CONDITION
if (isDev) {
	app.use(express.static('app_client/public'));
}
app.use(express.static('app_client/build'));

// SYNC DATABASE AND START SERVER
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