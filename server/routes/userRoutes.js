import express from 'express';
const router = express.Router();
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers, deleteUsers, getUserById, updateUser } from '../controllers/userController.js';
import  { protect, isAdmin } from '../middleware/authMiddleware.js';

// ---- ROUTES: pointing to specific controller functions ----

// router.get('/', getProducts)
// or
router.route('/').post(registerUser).get(protect, isAdmin, getUsers);

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

router.route('/:id').delete(protect, isAdmin, deleteUsers).get(protect, isAdmin, getUserById).put(protect, isAdmin, updateUser);

// router.get('/:id', getProductById)
// or
// router.route('/:id').get(getProductById);



export default router;