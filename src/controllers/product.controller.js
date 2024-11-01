'use strict'

const { SuccessResponse,CREATED } = require("../core/success.response")
const ProductService = require("../services/product.service");

class ProductController {
    create = async (req, res, next) =>{
        new CREATED({
            message: 'Product created successfully!',
            metadata: await ProductService.createProduct(req.body)
        }).send(res)
    }

    read = async (req, res, next) =>{
        new SuccessResponse({
            message: 'Product retrieved successfully!',
            metadata: await ProductService.readProduct(req.params.name)
        }).send(res)
    }
    update = async (req, res, next) =>{
        new SuccessResponse({
            message: 'Product updated successfully!',
            metadata: await ProductService.updateProduct(req.params.name, req.body)
        }).send(res)
    }
    delete = async (req, res, next) =>{
        new SuccessResponse({
            message: 'Product deleted successfully!',
            metadata: await ProductService.deleteProduct(req.params.name)
        }).send(res)
    }
}

module.exports = new ProductController()