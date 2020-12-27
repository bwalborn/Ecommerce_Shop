import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

// ---- ROUTES: pointing to specific controller functions ----

// router.get('/', getProducts)
// or

router.post('/login', authUser);


// router.get('/:id', getProductById)
// or
// router.route('/:id').get(getProductById);



export default router;