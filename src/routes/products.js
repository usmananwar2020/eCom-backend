import express from 'express';
import { productValidation } from '../validations/productValidation.js';
import { addProduct } from '../controller/products/index.js';
import auth from '../middleware/auth.js';
import roleAdmin from '../middleware/roleAdmin.js';

const router = express.Router()

router.post('/', [auth, roleAdmin], productValidation,  addProduct);

export default router;