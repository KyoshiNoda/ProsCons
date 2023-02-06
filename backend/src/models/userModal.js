const db = require('../DB/mySQL');

class User{
  user_id = 0;
  email = "";
  password ;
  constructor(user_id,email,password){
    this.user_id = user_id;
    this.email = email;
    this.password = password;
  }
  save(){
    let insert = `INSERT INTO accounts (${this.email},${this.password}) VALUES (?,?)`;
    return db.execute(insert);
  }
  static findAll(){
    let select = "SELECT * FROM accounts";
    return db.query(select,(err,result) =>{
      console.log(result)
    })
  }
  static findByID(id){
    let select = `SELECT * FROM accounts where id = ${id}`;
    db.execute(select);
  }
}
module.exports = User;