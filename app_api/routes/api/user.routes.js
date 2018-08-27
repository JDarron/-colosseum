// DEPENDENCIES
const express = require("express"),
    ctrl = require("../../controllers/model/user.ctrl"),
    router = express.Router();

    
// CREATE
router.post("/", ctrl.createUser);
// READ
router.get("/", ctrl.findAllUser);
// READ ONE
router.get("/:id", ctrl.findOneUser);
// UPDATE
router.put("/:id", ctrl.updateUser);
// DELETE
router.delete("/:id", ctrl.deleteUser);

module.exports = router;