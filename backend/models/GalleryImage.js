import mongoose from 'mongoose';

const galleryImageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['products', 'machinery'],
      required: true,
    },
  },
  { timestamps: true }
);

const GalleryImage = mongoose.model('GalleryImage', galleryImageSchema);

export default GalleryImage;
