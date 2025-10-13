import express from 'express';
import { productValidation } from '../validations/productValidation.js';
import { addProduct, getProduct, getProductById } from '../controller/products/index.js';
import auth from '../middleware/auth.js';
import roleAdmin from '../middleware/roleAdmin.js';

const router = express.Router()

router.post('/', [auth, roleAdmin], productValidation,  addProduct);
router.get('/', auth, getProduct);
router.get('/:id', auth, getProductById);

export default router;