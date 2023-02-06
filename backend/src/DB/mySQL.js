require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB

});
db.connect((err) =>{
  if(err){
    console.log(err);
  }
})

module.exports = db;



// const getAccounts = () =>{
//   const select = "SELECT * FROM `Pros-Cons`.users;"
//   const testResult = db.query(select,(err,result) =>{
//     return result;
//   });

//   return testResult;
// }

// module.exports ={
//   getAccounts
// }