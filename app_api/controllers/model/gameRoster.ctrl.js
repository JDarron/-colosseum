// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createGameRoster: (req, res) => {
        db
            .GameRoster
            .create(req.body)
            .then(dbGameRoster => {
                res.json(dbGameRoster);
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

    findAllGameRoster: (req, res) => {
        db
            .GameRoster
            .findAll({})
            .then(dbGameRoster => {
                res.json(dbGameRoster);
            })
            .catch(err => console.error(err));
    }, // END READ

    findGameRoster: (req, res) => {
        db
            .GameRoster
            .findAll({
                where: {
                    GameId: req.params.id,
                    active: true
                }
            })
            .then(dbGameRoster => {
                res.json(dbGameRoster);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateGameRoster: (req, res) => {
        db.GameRoster.update(
            req.body,
            {
                where: {
                    GameId: req.params.id,
                    TeamId: req.body.TeamId
                }
            }).then(dbGameRoster => {
                res.json(dbGameRoster);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteGameRoster: (req, res) => {
        db
            .GameRoster
            .destroy({
                where: {
                    GameId: req.params.id,
                    TeamId: req.body.TeamId
                }
            })
            .then(dbGameRoster => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
