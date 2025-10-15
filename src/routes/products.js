import express from 'express';
import { productValidation } from '../validations/productValidation.js';
import { addProduct, getProduct, getProductById, updateProduct } from '../controller/products/index.js';
import auth from '../middleware/auth.js';
import roleAdmin from '../middleware/roleAdmin.js';

const router = express.Router()

router.post('/', [auth, roleAdmin], productValidation,  addProduct);
router.get('/', auth, getProduct);
router.get('/:id', auth, getProductById);
router.put('/:id', [auth, roleAdmin], productValidation, updateProduct);

export default router;