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
}
module.exports = User;