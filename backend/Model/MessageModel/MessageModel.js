const db = require("../../config/db_config");
const sendMessage = (messageData, callback) => {
    const sql = "INSERT INTO messages(created_by , reciver_by , message) VALUES(?,?,?)";
    db.query(sql, [messageData.sender_id, messageData.reciver_id, messageData.message],callback);

}


const getMessage = (data , callback)=>{
    const sql = "SELECT * FROM messages WHERE (created_by = ? AND reciver_by = ?) OR (created_by = ? AND reciver_by = ?)"
    db.query(sql , [data.created_by , data.reciver_by , data.reciver_by , data.created_by],callback);
//
}


module.exports = {sendMessage , getMessage};