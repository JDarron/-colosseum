// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/player.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createPlayer);
// READ
router.get("/", ctrl.findAllPlayer);
// READ ONE
router.get("/:id", ctrl.findOnePlayer);
// UPDATE
router.put("/:id", ctrl.updatePlayer);
// DELETE
router.delete("/:id", ctrl.deletePlayer);

module.exports = router;
