// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createMatchRoster: (req, res) => {
        db
            .MatchRoster
            .create(req.body)
            .then(dbMatchRoster => {
                res.json(dbMatchRoster);
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

    findAllMatchRoster: (req, res) => {
        db
            .MatchRoster
            .findAll({})
            .then(dbMatchRoster => {
                res.json(dbMatchRoster);
            })
            .catch(err => console.error(err));
    }, // END READ

    findMatchRoster: (req, res) => {
        db
            .MatchRoster
            .findAll({
                where: {
                    MatchId: req.params.id,
                    compete: true
                }
            })
            .then(dbMatchRoster => {
                res.json(dbMatchRoster);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateMatchRoster: (req, res) => {
        db.MatchRoster.update(
            req.body,
            {
                where: {
                    MatchId: req.params.id,
                    PlayerId: req.body.PlayerId
                }
            }).then(dbMatchRoster => {
                res.json(dbMatchRoster);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteMatchRoster: (req, res) => {
        db
            .MatchRoster
            .destroy({
                where: {
                    MatchId: req.params.id,
                    PlayerId: req.body.PlayerId
                }
            })
            .then(dbMatchRoster => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
