'use strict'

const express = require('express')
const router = express.Router()
const productController = require('../../controllers/product.controller');

//create
router.post('/product/create', productController.create)
//read
router.post('/product/read/:name', productController.read)
//update
router.post('/product/update/:name', productController.update)
//delete
router.post('/product/delete/:name', productController.delete)

module.exports = router;