import Client from '../models/Client.js';
import { v2 as cloudinary } from 'cloudinary';

// GET /api/clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find({}).sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({ message: 'Server error fetching clients' });
  }
};

// POST /api/clients
export const addClients = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'At least one client logo file is required' });
    }

    const newClientsData = req.files.map(file => ({
      name: file.originalname.split('.')[0] || 'Client Logo',
      logoUrl: file.path,
      public_id: file.filename,
    }));

    const newClients = await Client.insertMany(newClientsData);

    res.status(201).json({ 
      message: `${newClients.length} client logo(s) added successfully`, 
      clients: newClients 
    });
  } catch (error) {
    console.error('Error adding clients:', error);
    res.status(500).json({ message: 'Server error adding clients' });
  }
};

// DELETE /api/clients/:id
export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    if (client.public_id) {
      try {
        await cloudinary.uploader.destroy(client.public_id);
      } catch (cloudErr) {
        console.error('Failed to delete from Cloudinary:', cloudErr);
      }
    }

    await Client.deleteOne({ _id: id });

    res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({ message: 'Server error deleting client' });
  }
};
