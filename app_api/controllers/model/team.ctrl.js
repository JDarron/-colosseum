// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createTeam: (req, res) => {
        db
            .Team
            .create(req.body)
            .then(dbTeam => {
                res.json(dbTeam);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END CREATE

    findAllTeam: (req, res) => {
        db
            .Team
            .findAll({})
            .then(dbTeam => {
                res.json(dbTeam);
            })
            .catch(err => console.error(err));
    }, // END READ

    findOneTeam: (req, res) => {
        db
            .Team
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbTeam => {
                res.json(dbTeam);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateTeam: (req, res) => {
        db.Team.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(dbTeam => {
                res.json(dbTeam);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteTeam: (req, res) => {
        db
            .Team
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbTeam => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
