const myProfile = require("../../Controller/ProfileController/ProfileController");
const express = require("express");
// console.log(getProfile.myProfile);
const router = express.Router();
router.get("/:token",myProfile);

module.exports = router;