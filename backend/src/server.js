//https://www.youtube.com/watch?v=xl50uspojYA&t=116s
// https://github.com/LloydJanseVanRensburg/Node-MySQL-Tut
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const bycrypt = require('bcrypt');
const accountRoute = require('../src/routes/accountRoute');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.listen(3001,() =>{
  console.log("listening on port 3001");
});
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB

});

app.use('/api/accounts',accountRoute);






app.post('/api/accounts', async (req,res) =>{
  const email = req.body.email;
  const salt = await bycrypt.genSalt();
  const password = await bycrypt.hash(req.body.password,salt);
  const sqlInsert = "INSERT INTO users (email,password) VALUES (?,?);";
  db.query(sqlInsert,[email,password],(err,result) =>{
    console.log(result);
  });
});

app.get('/api/list',(req,res) =>{
  const select = "SELECT * FROM `Pros-Cons` .pros_cons_list"
  db.query(select,(err,result) =>{
    result.length === 0 ? res.send("empty list") : res.send(result);
  });
});
app.get('/api/list/:id',(req,res) =>{
  const id = req.params.id;
  let select = "SELECT * FROM `Pros-Cons`";
  select += ` .pros_cons_list WHERE list_id = ${id}`;
  db.query(select,(err,result) =>{
    result.length === 0 ? res.send(`item ${id} doesn't exist`) : res.send(result);
  });
});

app.post('/api/list',(req,res) =>{
  const name = req.body.name;
  const user_id = 2;
  const insert = "INSERT INTO pros_cons_list (name,user_id) VALUES (?,?);";
  db.query(insert,[name,user_id],(err,result) =>{
    res.send(result);
  });
});

app.put('/api/list/:id',(req,res) =>{
  let update = "UPDATE `Pros-Cons`.`pros_cons_list` SET `name` = ";
  update += `'${req.body.title}' WHERE`;
  update += " (`list_id` = ";
  update += `'${req.params.id}');`;
  db.query(update,(err,result) =>{
   result.length === 0 ? res.send(`error on updating ${id}`) : res.send(result);
  })
});

app.delete('/api/list/:id',(req,res) =>{
  const id = req.params.id;
  let removeItem = "DELETE FROM `pros_cons` WHERE (`list_id` = '";
  removeItem +=`${id}')`;
  db.query(removeItem,(err,result) =>{
    res.send(id);
  })

  let removeList = "DELETE FROM `Pros-Cons`.`pros_cons_list` WHERE (`list_id` = '";
  removeList += `${id}');`;
  db.query(removeList,(err,result) =>{
    console.log(result);
  })
});

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

