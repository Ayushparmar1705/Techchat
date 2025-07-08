const db = require("../../config/db_config");
const profileQ = {
    userProfile : async (token,callback)=>{
        const sql = "SELECT * FROM signup WHERE id = ?";
        db.query(sql , [token],callback);

    }
}
module.exports = profileQ;