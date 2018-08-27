// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/teamRoster.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createTeamRoster);
// READ
router.get("/", ctrl.findAllTeamRoster);
// READ ONE
router.get("/:id", ctrl.findTeamRoster);
// UPDATE
router.put("/:id", ctrl.updateTeamRoster);
// DELETE
router.delete("/:id", ctrl.deleteTeamRoster);

module.exports = router;