// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createFollowPlayer: (req, res) => {
        db
            .FollowPlayer
            .create(req.body)
            .then(dbFollowPlayer => {
                res.json(dbFollowPlayer);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END CREATE

    findAllFollowPlayer: (req, res) => {
        db
            .FollowPlayer
            .findAll({})
            .then(dbFollowPlayer => {
                res.json(dbFollowPlayer);
            })
            .catch(err => console.error(err));
    }, // END READ

    findUserFollowPlayer: (req, res) => {
        db
            .FollowPlayer
            .findAll({
                where: {
                    UserId: req.params.id,
                    following: true
                }
            })
            .then(dbFollowPlayer => {
                res.json(dbFollowPlayer);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateFollowPlayer: (req, res) => {
        db.FollowPlayer.update(
            req.body,
            {
                where: {
                    UserId: req.params.id,
                    PlayerId: req.body.PlayerId
                }
            }).then(dbFollowPlayer => {
                res.json(dbFollowPlayer);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteFollowPlayer: (req, res) => {
        db
            .FollowPlayer
            .destroy({
                where: {
                    UserId: req.params.id,
                    PlayerId: req.body.PlayerId
                }
            })
            .then(dbFollowPlayer => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
