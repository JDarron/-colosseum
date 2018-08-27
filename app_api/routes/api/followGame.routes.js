// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/followGame.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createFollowGame);
// READ
router.get("/", ctrl.findAllFollowGame);
// READ ONE
router.get("/:id", ctrl.findUserFollowGame);
// UPDATE
router.put("/:id", ctrl.updateFollowGame);
// DELETE
router.delete("/:id", ctrl.deleteFollowGame);

module.exports = router;