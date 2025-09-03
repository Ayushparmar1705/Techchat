const db = require("../../config/db_config");
const removeFavourite = (fav_per_id , callback) => {
    const sql = "DELETE FROM favourite WHERE fav_per_id = ?";
    db.query(sql, [fav_per_id], callback);
}

module.exports = removeFavourite;