const DB = require('../DB/mySQL');


const getAccounts = () =>{
  const accounts = DB.getAccounts();
  return accounts;
}

module.exports = {
  getAccounts
}