// const ProConModal = require('../models/ProConModal');
const db = require('../DB/mySQL');

const getProItem = (req,res) =>{
  const id = req.params.id;
  let select = "SELECT * FROM `Pros-Cons`"; 
  select += ` .pros_cons WHERE list_id = ${id} && status = 'pro';`
  db.query(select,(err,result) =>{
    if(result.length === 0){
      res.status(400);
      res.send(`Item ${id} doesn't exist`);
    }
    else{
      res.status(200);
      res.send(result);
    }
  });
}
const createProItem = (req,res) =>{

}
const updateProItem = (req,res) =>{

}
const deleteProItem = (req,res) =>{

}


module.exports = {
  getProItem,
  createProItem,
  updateProItem,
  deleteProItem
}