import express from 'express';
import { getServices, addService, updateService, deleteService } from '../controllers/serviceController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../utils/cloudinary.js';

const router = express.Router();

router.get('/', getServices);
router.post('/', protect, upload.single('image'), addService);
router.put('/:id', protect, upload.single('image'), updateService);
router.delete('/:id', protect, deleteService);

export default router;
