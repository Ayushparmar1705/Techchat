//import the database connection
const db = require("../../config/db_config");
const bcrypt = require("bcrypt");

const signupUser = (userData , callback)=>{
    console.log(userData);
    const sql = "INSERT INTO user_details(fullname , email , password) VALUES(?,?,?)";
    db.query(sql , [userData.fullname , userData.email , userData.password],callback);
}
const findByEmailAndPassword = (userData , callback)=>{

    const sql = "SELECT * FROM user_details WHERE email = ?";
    
    db.query(sql , [userData.email],callback);
}

module.exports = {signupUser , findByEmailAndPassword};