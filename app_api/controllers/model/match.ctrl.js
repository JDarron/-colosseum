// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createMatch: (req, res) => {
        db
            .Match
            .create(req.body)
            .then(dbMatch => {
                res.json(dbMatch);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END CREATE

    findAllMatch: (req, res) => {
        db
            .Match
            .findAll({})
            .then(dbMatch => {
                res.json(dbMatch);
            })
            .catch(err => console.error(err));
    }, // END READ

    findOneMatch: (req, res) => {
        db
            .Match
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbMatch => {
                res.json(dbMatch);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateMatch: (req, res) => {
        db.Match.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(dbMatch => {
                res.json(dbMatch);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteMatch: (req, res) => {
        db
            .Match
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbMatch => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
