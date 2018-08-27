// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/followPlayer.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createFollowPlayer);
// READ
router.get("/", ctrl.findAllFollowPlayer);
// READ ONE
router.get("/:id", ctrl.findUserFollowPlayer);
// UPDATE
router.put("/:id", ctrl.updateFollowPlayer);
// DELETE
router.delete("/:id", ctrl.deleteFollowPlayer);

module.exports = router;