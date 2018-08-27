// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/season.ctrl"),
    router = express.Router();

// CREATE
router.post("/", ctrl.createSeason);
// READ
router.get("/", ctrl.findAllSeason);
// READ ONE
router.get("/:id", ctrl.findOneSeason);
// UPDATE
router.put("/:id", ctrl.updateSeason);
// DELETE
router.delete("/:id", ctrl.deleteSeason);

module.exports = router;
