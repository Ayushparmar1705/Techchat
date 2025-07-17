const myProfile = require("../../Controller/ProfileController/ProfileController");
const express = require("express");
// console.log(getProfile.myProfile);
const router = express.Router();
router.get("/:token",myProfile.myProfile);
router.put("/profile",myProfile.updateProfile);
module.exports = router;