import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import GalleryImage from '../models/GalleryImage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const clearGallery = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for clearing gallery...');

    const result = await GalleryImage.deleteMany();
    console.log(`Successfully deleted ${result.deletedCount} images from the gallery database.`);

    process.exit(0);
  } catch (err) {
    console.error('Error clearing gallery data:', err);
    process.exit(1);
  }
};

clearGallery();
