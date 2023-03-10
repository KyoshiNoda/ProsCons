const ProConModal = require('../models/ProConModal');
const db = require('../DB/mySQL');

const getAllPros = (req,res) =>{
  let select = "SELECT * FROM `Pros-Cons`";
  select += ` .pros_cons WHERE status = 'pro';`
  db.query(select,(err,result) =>{
    if(result.length === 0){
      res.status(400);
      res.send("Pro List is empty");
    }
    else{
      // res.status(200);
      res.send(result);
    }
  });
}

const getProItem = (req,res) =>{
  const id = req.params.id;
  let select = "SELECT * FROM `Pros-Cons`"; 
  select += ` .pros_cons WHERE list_id = ${id} && status = 'pro';`
  db.query(select,(err,result) =>{
    if(result.length === 0){
      // res.status(400);
      res.send(`Item ${id} doesn't exist`);
    }
    else{
      // res.status(200);
      res.send(result);
    }
  });
}
const createProItem = (req,res) =>{
  const list_id = req.body.list_id;
  const status = req.body.status;
  const text = req.body.text;
  const insert = "INSERT INTO pros_cons (list_id,status,text,user_id) VALUES (?,?,?,?)";
  db.query(insert,[list_id,status,text,2],(err,result) =>{
    if(err){
      // res.status(400);
      res.send("error on creating pro item");
    }
    else{
      // res.status(200);
      res.send("created item");
    }
  });
}
const updateProItem = (req,res) =>{
  const id = req.params.id;
  let update ="UPDATE `Pros-Cons`.`pros_cons` SET `text` = ";
  update += `'${req.body.text}' WHERE (`
  update += "`pros_cons_id` = ";
  update += `'${id}')`;
  db.query(update,(err,result) =>{
    if(err){
      // res.status(400);
      res.send(`item ${id} couldn't be updated`);
    }
    else{
      // res.status(200);
      res.send(`item ${id} updated!`);
    }
  })
}
const deleteProItem = (req,res) =>{
  const id = req.params.id;
  let remove = "DELETE FROM `Pros-Cons`.`pros_cons` WHERE (`pros_cons_id` = ";
  remove += `'${id}');`;
  db.query(remove,(err,result) =>{
    if(err){
      // res.status(400);
      res.send(`item ${id} couldn't be created!`)
    }
    else{
      // res.status(200);
      res.send(`item ${id} was created!`);
    }
  });
}


module.exports = {
  getAllPros,
  getProItem,
  createProItem,
  updateProItem,
  deleteProItem
}