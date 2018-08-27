// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/team.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createTeam);
// READ
router.get("/", ctrl.findAllTeam);
// READ ONE
router.get("/:id", ctrl.findOneTeam);
// UPDATE
router.put("/:id", ctrl.updateTeam);
// DELETE
router.delete("/:id", ctrl.deleteTeam);

module.exports = router;
