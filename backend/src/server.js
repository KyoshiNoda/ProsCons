const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const accountRoute = require('../src/routes/accountRoute');
const listRoute = require('../src/routes/listRoute');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.listen(3001,() =>{
  console.log("listening on port 3001");
});

app.use('/api/accounts',accountRoute);
app.use('/api/list',listRoute);


app.get('/api/pros-cons/pro/:id',(req,res) =>{
  const id = req.params.id;
  let select = "SELECT * FROM `Pros-Cons`"; 
  select += ` .pros_cons WHERE list_id = ${id} && status = 'pro';`
  db.query(select,(err,result) =>{
    result.length === 0 ? res.send(`item ${id} doesn't exist`) : res.send(result);
  })
});

app.post('/api/pros-cons/pro',(req,res) =>{
  const list_id = req.body.list_id;
  const status = req.body.status;
  const text = req.body.text;
  const insert = "INSERT INTO pros_cons (list_id,status,text,user_id) VALUES (?,?,?,?)";
  db.query(insert,[list_id,status,text,2],(err,result) =>{
    console.log(result);
  })
});
app.put('/api/pros-cons/pro/:id',(req,res) =>{
  let update ="UPDATE `Pros-Cons`.`pros_cons` SET `text` = ";
  update += `'${req.body.text}' WHERE (`
  update += "`pros_cons_id` = ";
  update += `'${req.params.id}')`;
  db.query(update,(err,result) =>{
    console.log(result);
  })
});
app.delete('/api/pros-cons/pro/:id',(req,res) =>{
  const id = req.params.id;
  let remove = "DELETE FROM `Pros-Cons`.`pros_cons` WHERE (`pros_cons_id` = ";
  remove += `'${id}');`;
  db.query(remove,(err,result) =>{
    res.send(result);
  })
});
app.get('/api/pros-cons/con/:id',(req,res) =>{
  const id = req.params.id;
  let select = "SELECT * FROM `Pros-Cons`"; 
  select += ` .pros_cons WHERE list_id = ${id} && status = 'con';`
  db.query(select,(err,result) =>{
    result.length === 0 ? res.send(`item ${id} doesn't exist`) : res.send(result);
  })
});
app.post('/api/pros-cons/con',(req,res) =>{
  const list_id = req.body.list_id;
  const status = req.body.status;
  const text = req.body.text;
  const insert = "INSERT INTO pros_cons (list_id,status,text,user_id) VALUES (?,?,?,?)";
  db.query(insert,[list_id,status,text,2],(err,result) =>{
    console.log(result);
  })
});

app.put('/api/pros-cons/con/:id',(req,res) =>{
  let update ="UPDATE `Pros-Cons`.`pros_cons` SET `text` = ";
  update += `'${req.body.text}' WHERE (`
  update += "`pros_cons_id` = ";
  update += `'${req.params.id}')`;
  db.query(update,(err,result) =>{
    console.log(result);
  })
});

app.delete('/api/pros-cons/con/:id',(req,res) =>{
  const id = req.params.id;
  let remove = "DELETE FROM `Pros-Cons`.`pros_cons` WHERE (`pros_cons_id` = ";
  remove += `'${id}');`;
  db.query(remove,(err,result) =>{
    res.send(result);
  })
});

