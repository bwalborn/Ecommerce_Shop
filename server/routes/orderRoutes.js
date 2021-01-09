import express from 'express';
const router = express.Router();
import { addOrderItems } from '../controllers/orderController.js';
import  { protect } from '../middleware/authMiddleware.js';

// ---- ROUTES: pointing to specific controller functions ----

// router.get('/', getProducts)
// or
router.route('/').post(protect, addOrderItems);


export default router;