// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createTeamRoster: (req, res) => {
        db
            .TeamRoster
            .create(req.body)
            .then(dbTeamRoster => {
                res.json(dbTeamRoster);
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

    findAllTeamRoster: (req, res) => {
        db
            .TeamRoster
            .findAll({})
            .then(dbTeamRoster => {
                res.json(dbTeamRoster);
            })
            .catch(err => console.error(err));
    }, // END READ

    findTeamRoster: (req, res) => {
        db
            .TeamRoster
            .findAll({
                where: {
                    TeamId: req.params.id,
                    active: true
                }
            })
            .then(dbTeamRoster => {
                res.json(dbTeamRoster);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateTeamRoster: (req, res) => {
        db.TeamRoster.update(
            req.body,
            {
                where: {
                    PlayerId: req.params.id,
                    TeamId: req.body.TeamId
                }
            }).then(dbTeamRoster => {
                res.json(dbTeamRoster);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteTeamRoster: (req, res) => {
        db
            .TeamRoster
            .destroy({
                where: {
                    PlayerId: req.params.id,
                    TeamId: req.body.TeamId
                }
            })
            .then(dbTeamRoster => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
