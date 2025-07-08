const express = require("express");
const messages = require("../../Controller/MessageController/MessageController");
const router = express.Router();
router.post("/sendmessage", messages.sendmessage);
router.get("/getmessage/:created_by/:reciver_by", messages.getMsg);
module.exports = router;