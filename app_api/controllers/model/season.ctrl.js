// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createSeason: (req, res) => {
        db
            .Season
            .create(req.body)
            .then(dbSeason => {
                res.json(dbSeason);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END CREATE

    findAllSeason: (req, res) => {
        db
            .Season
            .findAll({})
            .then(dbSeason => {
                res.json(dbSeason);
            })
            .catch(err => console.error(err));
    }, // END READ

    findOneSeason: (req, res) => {
        db
            .Season
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbSeason => {
                res.json(dbSeason);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateSeason: (req, res) => {
        db.Season.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(dbSeason => {
                res.json(dbSeason);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteSeason: (req, res) => {
        db
            .Season
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbSeason => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
