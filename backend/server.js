const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const bycrypt = require('bcrypt');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});

app.listen(3001,() =>{
  console.log("listening on port 3001");
});

app.get('/api/accounts',(req,res) =>{
  const select = "SELECT * FROM `Pros-Cons`.users;"
  db.query(select,(err,result) =>{
    res.send(result);
  });
});
app.post('/api/accounts', async (req,res) =>{
  const email = req.body.email;
  const salt = await bycrypt.genSalt();
  const password = await bycrypt.hash(req.body.password,salt);
  console.log(email,password);
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
    result.length === 0 ? res.send("empty list") : res.send(result);
  });
});

app.post('/api/list',(req,res) =>{
  const name = req.body.name;
  const user_id = req.body.user_id;
  const insert = "INSERT INTO pros_cons_list (name,user_id) VALUES (?,?);";
  db.query(insert,[name,user_id],(err,result) =>{
    console.log(result);
  });
});




app.get('/api/Pros-Cons', (req,res) =>{
  const select = "SELECT * FROM `Pros-Cons` .pros_cons_list";
  db.query(select,(err,result) =>{
    res.send(result);
  });
});


app.post('/api/Pros-Cons',(req,res) =>{
  const insert = 'INSERT INTO pros-cons (name,id,text,status) VALUES (?,?,?,?);';
  const name = req.body.name;
  const id = req.body.id;
  const text = req.body.text;
  const status = req.body.text;
  db.query(insert,[name,id,text,status], (err,result) =>{
    console.log(result);
  });
});


