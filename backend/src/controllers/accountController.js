// const accountService = require('../services/accountService');
const User = require('../models/userModal');
const db = require('../DB/mySQL');
let users = [];
const getAllAccounts =  (req,res) =>{
  const select = "SELECT * FROM `Pros-Cons`.users;";
  db.query(select,(err,result) =>{
    if(err){
      res.status(400).send(err);
    }
    else{
      res.status(200);
      users = result;
      res.send(users);
    }
  })
}

module.exports = {
  getAllAccounts
}