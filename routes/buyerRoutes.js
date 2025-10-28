const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');

router.post('/register', buyerController.register);
router.post('/login', buyerController.login);

module.exports = router;
