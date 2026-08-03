import Service from '../models/Service.js';
import { v2 as cloudinary } from 'cloudinary';

// GET /api/services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find({}).sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Server error fetching services' });
  }
};

// POST /api/services
export const addService = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    // Cloudinary upload handled by middleware, req.file.path has the URL, req.file.filename has the public_id
    const newService = await Service.create({
      title,
      description,
      category,
      image: req.file.path,
      public_id: req.file.filename,
    });

    res.status(201).json({ message: 'Service added successfully', service: newService });
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: 'Server error adding service' });
  }
};

// PUT /api/services/:id
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category, existingImage, existingPublicId } = req.body;

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    let imageUrl = existingImage;
    let publicId = existingPublicId;

    // If a new image was uploaded
    if (req.file) {
      imageUrl = req.file.path;
      publicId = req.file.filename;

      // Delete the old image from Cloudinary
      if (service.public_id && service.public_id !== existingPublicId) { // Wait, the existingPublicId passed from frontend is the old one. We can just use service.public_id
        await cloudinary.uploader.destroy(service.public_id);
      }
    }

    service.title = title || service.title;
    service.description = description || service.description;
    service.category = category || service.category;
    service.image = imageUrl;
    service.public_id = publicId;

    const updatedService = await service.save();

    res.status(200).json({ message: 'Service updated successfully', service: updatedService });
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: 'Server error updating service' });
  }
};

// DELETE /api/services/:id
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Delete image from Cloudinary
    if (service.public_id) {
      await cloudinary.uploader.destroy(service.public_id);
    }

    await Service.deleteOne({ _id: id });

    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ message: 'Server error deleting service' });
  }
};
