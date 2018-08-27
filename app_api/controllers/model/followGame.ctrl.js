// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createFollowGame: (req, res) => {
        db
            .FollowGame
            .create(req.body)
            .then(dbFollowGame => {
                res.json(dbFollowGame);
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

    findAllFollowGame: (req, res) => {
        db
            .FollowGame
            .findAll({})
            .then(dbFollowGame => {
                res.json(dbFollowGame);
            })
            .catch(err => console.error(err));
    }, // END READ

    findUserFollowGame: (req, res) => {
        db
            .FollowGame
            .findAll({
                where: {
                    UserId: req.params.id,
                    following: true
                }
            })
            .then(dbFollowGame => {
                res.json(dbFollowGame);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateFollowGame: (req, res) => {
        db.FollowGame.update(
            req.body,
            {
                where: {
                    UserId: req.params.id,
                    GameId: req.body.GameId
                }
            }).then(dbFollowGame => {
                res.json(dbFollowGame);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteFollowGame: (req, res) => {
        db
            .FollowGame
            .destroy({
                where: {
                    UserId: req.params.id,
                    GameId: req.body.GameId
                }
            })
            .then(dbFollowGame => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
