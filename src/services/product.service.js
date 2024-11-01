'use strict';

const productModel = require('../models/product.model');
const { NotFoundError, BadRequestError } = require('../core/error.response'); // Giả sử bạn có các lỗi này định nghĩa trong error handler

class ProductService {

    // Create
    static async createProduct(data) {
        if (!data.name) {
            throw new BadRequestError('Product name is required');
        }
        return await productModel.create(data);
    }

    // Read
    static async readProduct(name) {
        const product = await productModel.findOne({ name }).lean();
        if (!product) {
            throw new NotFoundError('Product not found');
        }
        return product;
    }

    // Update
    static async updateProduct(name, updateData) {
        const updatedProduct = await productModel.findOneAndUpdate({ name }, updateData, { new: true }).lean();
        if (!updatedProduct) {
            throw new NotFoundError('Product not found for updating');
        }
        return updatedProduct;
    }

    // Delete
    static async deleteProduct(name) {
        const deletedProduct = await productModel.findOneAndDelete({ name });
        if (!deletedProduct) {
            throw new NotFoundError('Product not found for deletion');
        }
        return deletedProduct;
    }
}

module.exports = 
    ProductService;

