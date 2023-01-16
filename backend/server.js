const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
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
  const sqlSelect = "SELECT * FROM `Pros-Cons`.accounts;"
  db.query(sqlSelect,(err,result) =>{
    res.send(result);
  });
});
