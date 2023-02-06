const User = require('../models/userModal');
const db = require('../DB/mySQL');
const bycrypt = require('bcrypt');
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
  });
}

const createAccount = async(req,res) =>{
  const email = req.body.email;
  const salt = await bycrypt.genSalt();
  const password = await bycrypt.hash(req.body.password,salt);
  const sqlInsert = "INSERT INTO users (email,password) VALUES (?,?);";
  db.query(sqlInsert,[email,password],(err,result) =>{
    if(err){
      res.status(400).send(err);
    }
    else{
      res.status(200);
      res.send({status: "OK", message : "Account created."})
    }
  });
}

module.exports = {
  getAllAccounts,
  createAccount
}