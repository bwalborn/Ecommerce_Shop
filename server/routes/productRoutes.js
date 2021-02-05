import express from 'express';
const router = express.Router();
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct } from '../controllers/productController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';


// ---- ROUTES: pointing to specific controller functions ----

// router.get('/', getProducts)
// or
router.route('/').get(getProducts).post(protect, isAdmin, createProduct);


// router.get('/:id', getProductById)
// or
router.route('/:id').get(getProductById).delete(protect, isAdmin, deleteProduct).put(protect, isAdmin, updateProduct);



export default router;