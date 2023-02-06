const List = require('../models/listModal');
const db = require('../DB/mySQL');
const getList = (req,res) =>{
  const select = "SELECT * FROM `Pros-Cons`.pros_cons_list;";
  db.query(select,(err,result) =>{
    if(err){
      res.status(400).send("empty list");
    }
    else{
      res.status(200);
      res.send(result);
    }
  });
}

module.exports = {
  getList
}