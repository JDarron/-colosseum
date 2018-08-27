// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/match.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createMatch);
// READ
router.get("/", ctrl.findAllMatch);
// READ ONE
router.get("/:id", ctrl.findOneMatch);
// UPDATE
router.put("/:id", ctrl.updateMatch);
// DELETE
router.delete("/:id", ctrl.deleteMatch);

module.exports = router;
