const express = require('express');
const router = express.Router();
const conController = require('../controllers/conController');


router.get('/',conController.getAllCons);
router.get('/:id',conController.getConItem);
router.post('/',conController.createConItem);
router.put('/:id',conController.updateConItem);
router.delete('/:id',conController.deleteConItem);


module.exports = router;