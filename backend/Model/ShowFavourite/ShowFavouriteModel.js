const db = require("../../config/db_config");
function getFavourites()
{
    
const sql = "SELECT * FROM favourite WHERE fav_per_id = ?";
db.query(sql , callback);

}
export default getFavourites