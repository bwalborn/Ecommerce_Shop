import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js';

// ---- ROUTES: pointing to specific controller functions ----

// router.get('/', getProducts)
// or
router.route('/').get(getProducts);


// router.get('/:id', getProductById)
// or
router.route('/:id').get(getProductById);



export default router;