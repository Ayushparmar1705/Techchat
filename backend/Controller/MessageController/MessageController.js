const sendMessage = require("../../Model/MessageModel/MessageModel.js");
const sendmessage = (req, res) => {
    const messageData = req.body;
    console.log(messageData);
    sendMessage(messageData, (err, result) => {
        if (err) {
            return res.status(401).send({ message: err });
        } else {
            return res.status(200).send({ message: result });
        }
    });
}
module.exports = sendmessage;