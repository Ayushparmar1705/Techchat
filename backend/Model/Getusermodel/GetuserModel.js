const db = require("../../config/db_config");
const getUser = (token, callback) => {
    if(!token){
        console.log("Invalid token");
    }
    else{
        console.log(token);
    const sql = "SELECT fullname , id , email , password FROM user_details WHERE id != ?";
    db.query(sql, token, callback);
    }
}
module.exports = { getUser };