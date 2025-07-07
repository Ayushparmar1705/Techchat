const express = require("express");
const GetuserController = require("../../Controller/GetuserController/GetuserController");
const router = express.Router();
router.get("/user/:token", GetuserController);
module.exports = router;