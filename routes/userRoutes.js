const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCtrl');

router.get('/', userController.index);
    

module.exports = router;