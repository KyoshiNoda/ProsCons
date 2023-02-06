const db = require('../DB/mySQL');

class List{
  list_id = 0;
  user_id = 0;
  name = "";
  constructor(list_id,user_id,name){
    this.list_id = list_id;
    this.user_id = user_id;
    this.name = name;
  }
}

module.exports = List;