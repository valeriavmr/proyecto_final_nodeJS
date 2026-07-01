import express from 'express';
import {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../controllers/products.controller.js';
import authentication from '../middlewares/authentication.js';

const router = express.Router();

// Aplicar el middleware de autenticación a todas las rutas de productos
router.use(authentication);

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;