const express = require("express");
const sendMessage = require("../../Controller/MessageController/MessageController");
const router = express.Router();
router.post("/message", sendMessage);
module.exports = router;