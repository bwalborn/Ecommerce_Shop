import express from 'express';
const router = express.Router();
import { authUser, getUserProfile } from '../controllers/userController.js';
import  { protect } from '../middleware/authMiddleware.js';

// ---- ROUTES: pointing to specific controller functions ----

// router.get('/', getProducts)
// or

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile);



// router.get('/:id', getProductById)
// or
// router.route('/:id').get(getProductById);



export default router;