const db = require("../../config/db_config");
function getFavourites(user_id , callback)
{

    const sql = "SELECT user_details.id , user_details.fullname  from user_details INNER JOIN favourite ON user_details.id = favourite.fav_per_id";
    db.query(sql , [user_id] , callback);

}
module.exports = getFavourites