import * as productModel from '../models/products.model.js';

export const getAllProducts = async () => {

    return productModel.getAllProducts();
};

export const getProductById = async (id) => {
    return productModel.getProductById(id);
};

export const addProduct = async (productData) => {
    return productModel.addProduct(productData);
};

export const updateProduct = async (id, productData) => {
    return productModel.updateProduct(id, productData);
};

export const deleteProduct = async (id) => {
    return productModel.deleteProduct(id);
};

export default {
getAllProducts,
getProductById,
addProduct,
updateProduct,
deleteProduct
};
