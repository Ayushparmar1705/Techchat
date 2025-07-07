const db = require("../../config/db_config");
const sendMessage = (messageData, callback) => {
    const sql = "INSERT INTO messages(created_by , reciver_by , message) VALUES(?,?,?)";
    db.query(sql, [messageData.sender_id, messageData.reciver_id, messageData.message],callback);

}


module.exports = sendMessage;