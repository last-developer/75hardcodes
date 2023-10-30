const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/ProductController');

router.route('/getproducts').get(getProducts)




module.exports = router;