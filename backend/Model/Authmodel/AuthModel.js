//import the database connection
const db = require("../../config/db_config");
const bcrypt = require("bcrypt");

const signupUser = (userData , callback)=>{
    const sql = "INSERT INTO signup(fullname , email , password) VALUES(?,?,?)";
    db.query(sql , [userData.fullname , userData.email , userData.password],callback);
}
const findByEmailAndPassword = (userData , callback)=>{
    const newPassword = userData.password;
    
    const sql = "SELECT * FROM signup WHERE email = ?";
    db.query(sql , [userData.email],callback);
}

module.exports = {signupUser , findByEmailAndPassword};