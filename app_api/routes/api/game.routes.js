// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/game.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createGame);
// READ
router.get("/", ctrl.findAllGame);
// READ ONE
router.get("/:id", ctrl.findOneGame);
// UPDATE
router.put("/:id", ctrl.updateGame);
// DELETE
router.delete("/:id", ctrl.deleteGame);

module.exports = router;
