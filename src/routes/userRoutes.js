const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', userController.create);
router.post('/check', userController.userCheck);

module.exports = router;