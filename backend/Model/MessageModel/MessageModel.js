const db = require("../../config/db_config");
const sendMessage = (messageData, callback) => {
    const sql = "INSERT INTO messages(created_by , reciver_by , message) VALUES(?,?,?)";
    db.query(sql, [messageData.sender_id, messageData.reciver_id, messageData.message],callback);

}


const getMessage = (data , callback)=>{
    const sql = "SELECT user_details.fullname , messages.message , DATE_FORMAT(messages.create_on,'%Y-%m-%d:%H:%i:%s') AS created_on , messages.message_id , messages.reciver_by , messages.created_by from user_details INNER JOIN messages  ON user_details.id = messages.created_by  WHERE (created_by = ? AND reciver_by = ?) OR (created_by = ? AND reciver_by = ?)"
    db.query(sql , [data.created_by , data.reciver_by , data.reciver_by , data.created_by],callback);
//
}

module.exports = {sendMessage , getMessage};