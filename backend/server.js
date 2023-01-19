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
})
app.listen(3001,() =>{
  console.log("listening on port 3001");
});

app.get('/', (req,res) =>{
  res.send("hello world");
});

app.get('/api/accounts',(req,res) =>{
  const select = "SELECT * FROM `Pros-Cons`.accounts;"
  db.query(select,(err,result) =>{
    res.send(result);
  });
});

app.get('/api/Pros-Cons', (req,res) =>{
  const select = "SELECT * FROM `Pros-Cons` .pros-cons";
  db.query(select,(err,result) =>{
    res.send(result);
  });
}) 

app.post('/api/Pros-Cons',(req,res) =>{
  const insert = 'INSERT INTO pros-cons (name,id,text,status) VALUES (?,?,?,?)'
  db.query(insert,[req.body.name,req.body.id,req.body.text,req.body.status], (err,result) =>{
    console.log(result);
  });
});


app.post('/api/accounts', async (req,res) =>{
  const email = req.body.email;
  const salt = await bycrypt.genSalt();
  const password = await bycrypt.hash(req.body.password,salt);
  const sqlInsert = "INSERT INTO accounts (email,password) VALUES (?,?);";
  db.query(sqlInsert,[email,password],(err,result) =>{
    console.log(result);
  });
});
