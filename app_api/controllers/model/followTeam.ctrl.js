// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createFollowTeam: (req, res) => {
        db
            .FollowTeam
            .create(req.body)
            .then(dbFollowTeam => {
                res.json(dbFollowTeam);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END CREATE

    findAllFollowTeam: (req, res) => {
        db
            .FollowTeam
            .findAll({})
            .then(dbFollowTeam => {
                res.json(dbFollowTeam);
            })
            .catch(err => console.error(err));
    }, // END READ

    findUserFollowTeam: (req, res) => {
        db
            .FollowTeam
            .findAll({
                where: {
                    UserId: req.params.id,
                    following: true
                }
            })
            .then(dbFollowTeam => {
                res.json(dbFollowTeam);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateFollowTeam: (req, res) => {
        db.FollowTeam.update(
            req.body,
            {
                where: {
                    UserId: req.params.id,
                    TeamId: req.body.TeamId
                }
            }).then(dbFollowTeam => {
                res.json(dbFollowTeam);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteFollowTeam: (req, res) => {
        db
            .FollowTeam
            .destroy({
                where: {
                    UserId: req.params.id,
                    TeamId: req.body.TeamId
                }
            })
            .then(dbFollowTeam => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
