const express = require("express");
const Authcontroller = require("../../Controller/Authcontroller/Authcontroller");
const router = express.Router();

router.post("/signup",Authcontroller.signup);
router.post("/login",Authcontroller.login);
module.exports = router;