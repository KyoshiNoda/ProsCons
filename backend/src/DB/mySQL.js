const mysql = require('mysql');
const dotenv = require('dotenv').config();
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});


const getAccounts = () =>{
  const select = "SELECT * FROM `Pros-Cons`.users;"
  const result = db.query(select,(err,result) =>{
    return res.send(result);
  });

  return result;
}

module.exports ={
  getAccounts
}