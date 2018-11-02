// DEPENDENCIES
const express = require("express");
const ctrl = require("../../controllers/auth/auth.ctrl");
const router = express.Router();

router.post("/login", ctrl.login);
router.post("/register", ctrl.register);

module.exports = router;
