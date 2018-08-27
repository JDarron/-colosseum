// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/matchRoster.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createMatchRoster);
// READ
router.get("/", ctrl.findAllMatchRoster);
// READ ONE
router.get("/:id", ctrl.findMatchRoster);
// UPDATE
router.put("/:id", ctrl.updateMatchRoster);
// DELETE
router.delete("/:id", ctrl.deleteMatchRoster);

module.exports = router;