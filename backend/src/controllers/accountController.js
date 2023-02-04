const accountService = require('../services/accountService');

const getAllAccounts = (req,res) =>{
  const accounts = accountService.getAccounts();
  res.send({data : accounts})
}

module.exports = {
  getAllAccounts
}