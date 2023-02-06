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

const createListItem = (req,res) =>{
  const name = req.body.name;
  const user_id = 2;
  const insert = "INSERT INTO pros_cons_list (name,user_id) VALUES (?,?);";
  db.query(insert,[name,user_id],(err,result) =>{
    if(err){
      res.status(400);
      res.send(err);
    }
    else{
      res.status(200);
      res.send(result);
    }
  });
}

const updateListItem = (req,res) =>{
  let update = "UPDATE `Pros-Cons`.`pros_cons_list` SET `name` = ";
  update += `'${req.body.title}' WHERE`;
  update += " (`list_id` = ";
  update += `'${req.params.id}');`;
  db.query(update,(err,result) =>{
    if(result === 0){
      res.status(400);
      res.send(`error on updating item ${id}`);
    }
    else{
      res.send(result);
    }
  });
}
const deleteListItem = (req,res) =>{
  const id = req.params.id;

  let removeItem = "DELETE FROM `pros_cons` WHERE (`list_id` = '";
  removeItem +=`${id}')`;
  db.query(removeItem,(err,result) =>{
    if(err){
      res.status(400);
      res.send(err);
    }
    else{
      res.status(200);
      res.send(id);
    }
  })

  let removeList = "DELETE FROM `Pros-Cons`.`pros_cons_list` WHERE (`list_id` = '";
  removeList += `${id}');`;
  db.query(removeList,(err,result) =>{
    if(err){
      res.status(400);
      res.send(err);
    }
    else{
      res.send(`deleted item!`)
    }
  })
}

module.exports = {
  getList,
  getListByID,
  createListItem,
  updateListItem,
  deleteListItem
}