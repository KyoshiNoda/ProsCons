const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

router.get('/',listController.getList);
router.get('/:id',listController.getListByID);
router.post('/',listController.createListItem);
router.put('/:id',listController.updateListItem);
router.delete('/:id',listController.deleteListItem);


module.exports = router;