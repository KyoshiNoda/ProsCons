const db = require('../DB/mySQL');

class ProConModal{
  pros_cons_id = 0;
  text = "";
  status = "";
  user_id = "";
  list_id = "";
  constructor(pros_cons_id,text,status,user_id,list_id){
    this.pros_cons_id = pros_cons_id;
    this.text = text;
    this.status = status;
    this.user_id = user_id;
    this.list_id = list_id;
  }
}
module.exports = ProConModal;