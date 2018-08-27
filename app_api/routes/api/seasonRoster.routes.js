// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/seasonRoster.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createSeasonRoster);
// READ
router.get("/", ctrl.findAllSeasonRoster);
// READ ONE
router.get("/:id", ctrl.findSeasonRoster);
// UPDATE
router.put("/:id", ctrl.updateSeasonRoster);
// DELETE
router.delete("/:id", ctrl.deleteSeasonRoster);

module.exports = router;