// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createSeasonRoster: (req, res) => {
        db
            .SeasonRoster
            .create(req.body)
            .then(dbSeasonRoster => {
                res.json(dbSeasonRoster);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END CREATE

    /**
     * 
     *  THE GET ALL FUNCTION FOR THE JOIN TABLES ARE BROKEN. GOOGLE IT!
     * 
     */

    findAllSeasonRoster: (req, res) => {
        db
            .SeasonRoster
            .findAll({})
            .then(dbSeasonRoster => {
                res.json(dbSeasonRoster);
            })
            .catch(err => console.error(err));
    }, // END READ

    findSeasonRoster: (req, res) => {
        db
            .SeasonRoster
            .findAll({
                where: {
                    SeasonId: req.params.id,
                    compete: true
                }
            })
            .then(dbSeasonRoster => {
                res.json(dbSeasonRoster);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateSeasonRoster: (req, res) => {
        db.SeasonRoster.update(
            req.body,
            {
                where: {
                    SeasonId: req.params.id,
                    TeamId: req.body.TeamId
                }
            }).then(dbSeasonRoster => {
                res.json(dbSeasonRoster);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteSeasonRoster: (req, res) => {
        db
            .SeasonRoster
            .destroy({
                where: {
                    SeasonId: req.params.id,
                    TeamId: req.body.TeamId
                }
            })
            .then(dbSeasonRoster => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
