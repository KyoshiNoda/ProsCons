const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
 
router.get('/',accountController.getAllAccounts);

module.exports = router;
