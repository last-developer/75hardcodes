const express = require('express');
const router = express.Router();
const { checkInput } = require('../controllers/UserController');

router.route('/checkInput').post(checkInput)




module.exports = router;