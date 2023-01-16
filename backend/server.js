const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const app = express();
mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Pros-Cons"
})
app.listen(3001,() =>{
  console.log("listening on port 3001");
});

app.get('/', (req,res) =>{
  res.send("hello world");
});

app.get('/api/account/:id',(req,res) =>{
  res.send({
    account : req.params.id
  });
});