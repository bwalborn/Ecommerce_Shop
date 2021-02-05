import express from 'express';
const router = express.Router();
import { addMessage, getAllMessages, getMessageById, deleteMessage } from '../controllers/messageController.js';
import  { protect, isAdmin } from '../middleware/authMiddleware.js';

// ---- ROUTES: pointing to specific controller functions ----

// router.get('/', getProducts)
// or
router.route('/').post(addMessage).get(protect, isAdmin, getAllMessages);

router.route('/:id').delete(protect, isAdmin, deleteMessage).get(protect, isAdmin, getMessageById);

// router.get('/:id', getProductById)
// or
// router.route('/:id').get(getProductById);



export default router;