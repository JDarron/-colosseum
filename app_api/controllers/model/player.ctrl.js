// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createPlayer: (req, res) => {
        db
            .Player
            .create(req.body)
            .then(dbPlayer => {
                res.json(dbPlayer);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    },

    findAllPlayer: (req, res) => {
        db
            .Player
            .findAll({})
            .then(dbPlayer => {
                res.json(dbPlayer);
            })
            .catch(err => console.error(err));
    },

    findOnePlayer: (req, res) => {
        db
            .Player
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbPlayer => {
                res.json(dbPlayer);
            })
            .catch(err => console.error(err));
    },

    updatePlayer: (req, res) => {
        db.Player.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(dbPlayer => {
                res.json(dbPlayer);
            })
            .catch(err => console.error(err));
    },

    deletePlayer: (req, res) => {
        db
            .Player
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbPlayer => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    }

}; // END EXPORT
