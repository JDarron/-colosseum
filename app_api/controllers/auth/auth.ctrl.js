// REQUIRE THE DATABASE MODELS
const models = require("../../models");
var jwt = require('jsonwebtoken');
var helpers = require("../../routes/helpers/auth.helpers");
var routeHelpers = require("../../routes/helpers/route.helper");

module.exports = {

    login: (req, res) => {

        models.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(function (resp) {
                if (helpers.checkIfValidPass(resp, req.body.password)) {
                    var expiry = new Date();
                    expiry.setDate(expiry.getDate() + 7);

                    res.json({
                        token: jwt.sign({
                            exp: parseInt(expiry.getTime() / 1000),
                            userID: resp.id,
                            name: resp.name,
                            email: resp.email,
                            scaryStuff: "OOGA BOOOGA"
                        }, process.env.JWT_SECRET)
                    });
                }
                else {
                    routeHelpers.sendJsonError(res, new Error("WRONG PASSWORD"), 401);
                }
            })
            .catch(function (err) {
                routeHelpers.sendJsonError(res, err);
            });
    },

    register: (req, res) => {

        var salt = helpers.getSalt();

        var user = {
            salt: salt,
            email: req.body.email,
            hash: helpers.getHash(salt, req.body.password),
            name: req.body.name
        };

        console.log(user.salt, user.hash);

        models.User.create(user)
            .then(function (resp) {
                res.json({ message: "Creation Sucess!", id: resp.id })
            })
            .catch(function (err) {
                routeHelpers.sendJsonError(res, err);
            });
    }

}; // END EXPORT
