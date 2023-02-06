const express = require('express');
const router = express.Router();
const proController = require('../controllers/proController');


router.get('/',proController.getAllPros);
router.get('/:id',proController.getProItem);
router.post('/',proController.createProItem);
router.put('/:id',proController.updateProItem);
router.delete('/:id',proController.deleteProItem);


module.exports = router;