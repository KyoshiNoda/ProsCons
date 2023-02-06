const ProConModal = require('../models/ProConModal');
const db = require('../DB/mySQL');

const getAllCons = (req,res) =>{
  let select = "SELECT * FROM `Pros-Cons`";
  select += ` .pros_cons WHERE status = 'con';`
  db.query(select,(err,result) =>{
    if(result.length === 0){
      // res.status(400);
      res.send("Con List is empty");
    }
    else{
      // res.status(200);
      res.send(result);
    }
  });
}

const getConItem = (req,res) =>{
  const id = req.params.id;
  let select = "SELECT * FROM `Pros-Cons`"; 
  select += ` .pros_cons WHERE list_id = ${id} && status = 'con';`
  db.query(select,(err,result) =>{
    if(result.length === 0){
      res.status(400);
      res.send(`item ${id} doesn't exist`);
    }
    else{
      res.send(result);
    }
  });
}
const createConItem = (req,res) =>{
  const list_id = req.body.list_id;
  const status = req.body.status;
  const text = req.body.text;
  const insert = "INSERT INTO pros_cons (list_id,status,text,user_id) VALUES (?,?,?,?)";
  db.query(insert,[list_id,status,text,2],(err,result) =>{
    if(err){
      // res.status(400);
      res.send(`item couldn't be created`);
    }
    else{
      res.send(`item was created!`);
    }
  });
}

const updateConItem = (req,res) =>{
  const id = req.params.id;
  let update ="UPDATE `Pros-Cons`.`pros_cons` SET `text` = ";
  update += `'${req.body.text}' WHERE (`
  update += "`pros_cons_id` = ";
  update += `'${id}')`;
  db.query(update,(err,result) =>{
    if(err){
      // res.status(400);
      res.send(`couldn't update item ${id}`);
    }
    else{
      // res.status(200);
      res.send(`item ${id} was created!`);
    }
  });
}

const deleteConItem = (req,res) =>{
  const id = req.params.id;
  let remove = "DELETE FROM `Pros-Cons`.`pros_cons` WHERE (`pros_cons_id` = ";
  remove += `'${id}');`;
  db.query(remove,(err,result) =>{
   if(err){
    // res.status(400);
    res.send(`item ${id} couldn't be deleted`);
   }
   else{
    // res.status(200);
    res.send(`item ${id} was deleted!`);
   }
  });
}


module.exports = {
  getAllCons,
  getConItem,
  createConItem,
  updateConItem,
  deleteConItem
}