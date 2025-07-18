const messages = require("../../Model/MessageModel/MessageModel.js");
// When we call the api with frontend so it's create the res and req object but in socket io don't create that's why it's not accesible
const sendmessage = (data) => {
    // const messageData = req.body;
    const messageData = data;
    console.log(messageData);
    messages.sendMessage(messageData, (err, result) => {
        if (err) {
            return err;
        } else {
            return result;
        }
    });
}

const getMsg = (req, res) => {
    const data = req.params;
    messages.getMessage(data, (err, result) => {
        if (err) {
            return res.status(402).send({ message: err });
        } else {
            return res.status(200).send({ message: result });
        }
    })


}
module.exports = { sendmessage, getMsg };


