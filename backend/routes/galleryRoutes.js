import express from 'express';
import { getImages, addImage, deleteImage } from '../controllers/galleryController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../utils/cloudinary.js';

const router = express.Router();

router.get('/', getImages);
router.post('/', protect, upload.array('images', 20), addImage);
router.delete('/:id', protect, deleteImage);

export default router;
