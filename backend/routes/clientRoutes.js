import express from 'express';
import { getClients, addClients, deleteClient } from '../controllers/clientController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../utils/cloudinary.js';

const router = express.Router();

router.get('/', getClients);
router.post('/', protect, upload.array('logos', 20), addClients);
router.delete('/:id', protect, deleteClient);

export default router;
