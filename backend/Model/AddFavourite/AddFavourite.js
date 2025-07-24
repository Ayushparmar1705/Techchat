const db = require("../../config/db_config");


const Favourite_Person = (userData , callback)=>{
    const sql = "INSERT INTO favourite(created_by , fav_per_id) VALUES(?,?)";
    db.query(sql, [userData.createdBy, userData.fav_per_id], (callback));

}

module.exports = Favourite_Person