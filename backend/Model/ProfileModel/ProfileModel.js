const db = require("../../config/db_config");
const profileQ = {
    userProfile: async (token, callback) => {
        const sql = "SELECT * FROM user_details WHERE id = ?";
        db.query(sql, [token], callback);

    },
    updateProfile: async (profiledata, callback) => {
        const sql = "UPDATE user_details  SET fullname = ? , email = ? , image = ?  WHERE id = ?";
        db.query(sql, [profiledata.name , profiledata.email , profiledata.img , profiledata.id], callback);
    }
}
module.exports = profileQ;