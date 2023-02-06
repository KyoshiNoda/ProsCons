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
const getListByID = (req,res) =>{
  const id = req.params.id;
  let select = "SELECT * FROM `Pros-Cons`";
  select += ` .pros_cons_list WHERE list_id = ${id}`;
  db.query(select,(err,result) =>{
    if(result.length === 0){
      res.status(400).send(`Item ${id} doesn't exist`);
    }
    else{
      res.status(200);
      res.send(result);
    }
  });
}

module.exports = {
  getList,
  getListByID
}