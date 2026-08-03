import GalleryImage from '../models/GalleryImage.js';
import { v2 as cloudinary } from 'cloudinary';

// GET /api/gallery
export const getImages = async (req, res) => {
  try {
    const images = await GalleryImage.find({}).sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    res.status(500).json({ message: 'Server error fetching gallery images' });
  }
};

// POST /api/gallery
export const addImage = async (req, res) => {
  try {
    const { category } = req.body;

    if (!category || !['products', 'machinery'].includes(category)) {
      return res.status(400).json({ message: 'Valid category is required (products or machinery)' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'At least one image file is required' });
    }

    const newImagesData = req.files.map(file => ({
      url: file.path,
      public_id: file.filename,
      category,
    }));

    const newImages = await GalleryImage.insertMany(newImagesData);

    res.status(201).json({ message: `${newImages.length} images added successfully`, images: newImages });
  } catch (error) {
    console.error('Error adding gallery image:', error);
    res.status(500).json({ message: 'Server error adding gallery image' });
  }
};

// DELETE /api/gallery/:id
export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await GalleryImage.findById(id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    if (image.public_id) {
      // Avoid deleting the static seed images if they aren't actually on our main cloudinary account under the standard upload folder (though technically they are all just cloudinary URLs). The public_id logic will just try to delete it. If it fails, we catch it but still delete the DB record.
      try {
        await cloudinary.uploader.destroy(image.public_id);
      } catch (cloudErr) {
        console.error('Failed to delete from Cloudinary:', cloudErr);
      }
    }

    await GalleryImage.deleteOne({ _id: id });

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    res.status(500).json({ message: 'Server error deleting gallery image' });
  }
};
