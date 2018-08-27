// REQUIRE THE DATABASE MODELS
const db = require("../../models");

module.exports = {

    createGame: (req, res) => {
        db
            .Game
            .create(req.body)
            .then(dbGame => {
                res.json(dbGame);
            })
            .catch(err => {
                console.error(err);
                res.json(err);
            });
    }, // END CREATE

    findAllGame: (req, res) => {
        db
            .Game
            .findAll({})
            .then(dbGame => {
                res.json(dbGame);
            })
            .catch(err => console.error(err));
    }, // END READ

    findOneGame: (req, res) => {
        db
            .Game
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbGame => {
                res.json(dbGame);
            })
            .catch(err => console.error(err));
    }, // END READ ONE

    updateGame: (req, res) => {
        db.Game.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }).then(dbGame => {
                res.json(dbGame);
            })
            .catch(err => console.error(err));
    }, // END UPDATE

    deleteGame: (req, res) => {
        db
            .Game
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(dbGame => {
                res.json("Success!");
            })
            .catch(err => console.error(err));
    } // END DELETE

}; // END EXPORT
