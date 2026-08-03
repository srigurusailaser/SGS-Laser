import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true, // Cloudinary URL
    },
    public_id: {
      type: String, // Cloudinary public_id for deletion later
    }
  },
  { timestamps: true }
);

const Service = mongoose.model('Service', serviceSchema);

export default Service;
