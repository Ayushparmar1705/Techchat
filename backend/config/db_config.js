const mysql = require("mysql2");

const db = await mysql.createConnection({
  host: "gateway01-privatelink.ap-southeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "23SzzUDureHhtBf.root",
  password: "ez7Ixuvz71qm8OwT",   // replace with your actual password
  database: "test",
  ssl: { rejectUnauthorized: true } // TiDB Cloud requires SSL
});
db.connect((err)=>{
    if (err) throw err;
})
module.exports = db;
// mysql://23SzzUDureHhtBf.root:ez7Ixuvz71qm8OwT@gateway01-privatelink.ap-southeast-1.prod.aws.tidbcloud.com:4000/test