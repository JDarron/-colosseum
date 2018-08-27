// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/gameRoster.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createGameRoster);
// READ
router.get("/", ctrl.findAllGameRoster);
// READ ONE
router.get("/:id", ctrl.findGameRoster);
// UPDATE
router.put("/:id", ctrl.updateGameRoster);
// DELETE
router.delete("/:id", ctrl.deleteGameRoster);

module.exports = router;