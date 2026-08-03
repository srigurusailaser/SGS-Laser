import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Plus, Edit2, Trash2, X, Image as ImageIcon, Layers } from 'lucide-react';
import toast from 'react-hot-toast';
import { optimizeCloudinaryUrl } from '../../utils/image-optimizer';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (service = null) => {
    if (service) {
      setEditingId(service._id);
      setFormData({
        title: service.title,
        category: service.category,
        description: service.description,
      });
      setImagePreview(service.image);
    } else {
      setEditingId(null);
      setFormData({ title: '', category: '', description: '' });
      setImagePreview(null);
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormData({ title: '', category: '', description: '' });
      setImagePreview(null);
      setImageFile(null);
      setEditingId(null);
    }, 300);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!editingId && !imageFile) {
      toast.error('Please select an image');
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const data = new FormData();
      data.append('title', formData.title);
      data.append('category', formData.category);
      data.append('description', formData.description);
      
      if (imageFile) {
        data.append('image', imageFile);
      }
      
      if (editingId) {
        // Need existing info to avoid deleting image if not changed
        const existingService = services.find(s => s._id === editingId);
        data.append('existingImage', existingService.image);
        data.append('existingPublicId', existingService.public_id);
      }

      const url = editingId ? `/api/services/${editingId}` : '/api/services';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data // FormData handles the Content-Type header automatically
      });

      if (res.ok) {
        toast.success(`Service ${editingId ? 'updated' : 'added'} successfully!`);
        handleCloseModal();
        fetchServices();
      } else {
        const err = await res.json();
        toast.error(err.message || 'Failed to save service');
      }
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Network error while saving');
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deletingId) return;
    
    setIsDeleting(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/services/${deletingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        toast.success('Service deleted successfully');
        setServices(services.filter(s => s._id !== deletingId));
      } else {
        const err = await res.json();
        toast.error(err.message || 'Failed to delete service');
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Network error while deleting');
    } finally {
      setIsDeleting(false);
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-text mb-1">Services Overview</h2>
          <p className="text-gray-500 font-medium text-sm">Manage the services displayed on your homepage.</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-transform flex items-center gap-2"
        >
          <Plus size={20} />
          <span className="hidden sm:inline">Add New Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {services.map((service) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={service._id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 group flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative bg-gray-100">
                <img
                  src={optimizeCloudinaryUrl(service.image, { width: 400, height: 300 })}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-[10px] font-black uppercase text-primary tracking-widest">
                  {service.category}
                </div>
                
                {/* Actions Overlay */}
                <div className="absolute top-2 right-2 z-10 flex gap-2">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="p-2 bg-white/90 backdrop-blur-md text-primary rounded-full shadow-md hover:bg-white hover:scale-110 transition-all"
                    aria-label="Edit service"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => setDeletingId(service._id)}
                    className="p-2 bg-red-500/90 backdrop-blur-md text-white rounded-full shadow-md hover:bg-red-600 hover:scale-110 transition-all"
                    aria-label="Delete service"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-text mb-2 line-clamp-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium line-clamp-3">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {services.length === 0 && (
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Layers size={32} />
          </div>
          <p className="text-lg font-bold text-gray-500">No services found.</p>
          <p className="text-sm text-gray-400">Click the "Add New Service" button to get started.</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <h3 className="text-xl font-black text-text">
                  {editingId ? 'Edit Service' : 'Add New Service'}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-gray-400 hover:text-text bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <form onSubmit={handleSave} className="space-y-6">
                  {/* Image Upload Area */}
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block">
                      Service Image
                    </label>
                    <div 
                      className={`w-full h-48 rounded-2xl border-2 border-dashed ${
                        imagePreview ? 'border-primary' : 'border-gray-200'
                      } bg-gray-50 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-gray-100 transition-colors`}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {imagePreview ? (
                        <>
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-bold flex items-center gap-2">
                              <Edit2 size={18} /> Change Image
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-3 text-primary">
                            <ImageIcon size={24} />
                          </div>
                          <p className="text-sm font-bold text-gray-600">Click to upload image</p>
                          <p className="text-[10px] font-medium text-gray-400 mt-1">JPEG, PNG or WEBP (Max 5MB)</p>
                        </div>
                      )}
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Category (Top Capsule)
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-text"
                        placeholder="e.g. Printing"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                        Heading (Title)
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-text"
                        placeholder="e.g. Custom Fabric Banners"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Description
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-gray-600 resize-none leading-relaxed"
                      placeholder="High-quality fabric banners..."
                    />
                  </div>
                </form>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-4 sticky bottom-0">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={saving}
                  className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-black shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:hover:translate-y-0 flex items-center gap-2"
                >
                  {saving ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Saving...
                    </>
                  ) : (
                    'Save Service'
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deletingId && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeletingId(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden z-10 p-6 text-center"
            >
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 size={32} />
              </div>
              <h3 className="text-xl font-black text-text mb-2">Delete Service?</h3>
              <p className="text-gray-500 text-sm mb-6">
                Are you sure you want to delete this service? This action cannot be undone.
              </p>
              <div className="flex gap-4 w-full">
                <button
                  onClick={() => setDeletingId(null)}
                  className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className="flex-1 bg-red-500 text-white py-3 rounded-xl font-black hover:bg-red-600 shadow-lg shadow-red-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 flex justify-center items-center gap-2"
                >
                  {isDeleting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Deleting...
                    </>
                  ) : (
                    'Delete'
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageServices;
