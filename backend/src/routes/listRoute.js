const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

router.get('/',listController.getList);
router.get('/:id',listController.getListByID);


module.exports = router;