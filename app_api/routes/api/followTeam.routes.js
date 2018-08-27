// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/followTeam.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createFollowTeam);
// READ
router.get("/", ctrl.findAllFollowTeam);
// READ ONE
router.get("/:id", ctrl.findUserFollowTeam);
// UPDATE
router.put("/:id", ctrl.updateFollowTeam);
// DELETE
router.delete("/:id", ctrl.deleteFollowTeam);

module.exports = router;