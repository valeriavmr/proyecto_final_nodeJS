import * as productsService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    res.status(200).json(await productsService.getAllProducts());
};

export const getProductById = async (req, res) => {
const id = req.params.id;
const product = await productsService.getProductById(id);
if (product) {
res.status(200).json(product);
} else {
res.status(404).json({ message: 'Producto no encontrado' });
}
};

export const createProduct = async (req, res) => {
const { category, description, image, price, title } = req.body;

if (!category || !description || !image || !price || !title) {
    return res.status(422).json({ message: 'Faltan campos obligatorios' });
}
const newProduct = await productsService.addProduct({ category, description, image, price, title });
res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
const id = req.params.id;
const { category, description, image, price, title } = req.body;
if (!category || !description || !image || !price || !title) {
    return res.status(422).json({ message: 'Faltan campos obligatorios' });
}
const updatedProduct = await productsService.updateProduct(id, { category, description, image, price, title });
if (updatedProduct) {
res.status(200).json(updatedProduct);
} else {
res.status(404).json({ message: 'Producto no encontrado' });
}
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await productsService.deleteProduct(id);

  if (!deletedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json({
    message: "Producto eliminado",
    product: deletedProduct,
  });
};