const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ayush#2004",
    database: "chatting",
});
db.connect((err)=>{
    if (err) throw err;
})
module.exports = db;