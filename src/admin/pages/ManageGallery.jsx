import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Plus, Trash2, X, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { optimizeCloudinaryUrl } from '../../utils/image-optimizer';
import { apiFetch } from '../../utils/api';

const ManageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('products');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const [uploadCategory, setUploadCategory] = useState('products');
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await apiFetch('/api/gallery');
      if (res.ok) {
        const data = await res.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      toast.error('Failed to load gallery');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setUploadCategory(activeTab);
    setImageFiles([]);
    setImagePreviews([]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setImageFiles([]);
      setImagePreviews([]);
    }, 300);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setImageFiles(prev => [...prev, ...files]);
      
      const newPreviews = [];
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result);
          if (newPreviews.length === files.length) {
            setImagePreviews(prev => [...prev, ...newPreviews]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeSelectedImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (imageFiles.length === 0) {
      toast.error('Please select at least one image');
      return;
    }

    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const data = new FormData();
      data.append('category', uploadCategory);
      imageFiles.forEach(file => {
        data.append('images', file);
      });
      
      const res = await apiFetch('/api/gallery', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: data
      });

      if (res.ok) {
        toast.success(`${imageFiles.length} image(s) added successfully!`);
        handleCloseModal();
        fetchImages();
        // Switch to the tab where the image was uploaded
        setActiveTab(uploadCategory);
      } else {
        const err = await res.json();
        toast.error(err.message || 'Failed to save image');
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
      const res = await apiFetch(`/api/gallery/${deletingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (res.ok) {
        toast.success('Image deleted successfully');
        setImages(images.filter(img => img._id !== deletingId));
      } else {
        const err = await res.json();
        toast.error(err.message || 'Failed to delete image');
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Network error while deleting');
    } finally {
      setIsDeleting(false);
      setDeletingId(null);
    }
  };

  const visibleImages = images.filter(img => img.category === activeTab);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-text mb-1">Gallery Overview</h2>
          <p className="text-gray-500 font-medium text-sm">Manage the images displayed in your portfolio.</p>
        </div>
        <button
          onClick={handleOpenModal}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          <span>Upload Image</span>
        </button>
      </div>

      <div className="flex bg-gray-100 p-2 rounded-2xl w-fit mb-8 shadow-inner">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-8 py-2.5 rounded-xl font-black text-sm transition-all duration-300 ${activeTab === "products" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-primary"}`}
        >
          Our Creations
        </button>
        <button
          onClick={() => setActiveTab("machinery")}
          className={`px-8 py-2.5 rounded-xl font-black text-sm transition-all duration-300 ${activeTab === "machinery" ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-primary"}`}
        >
          The Tech
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={img._id}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 bg-gray-100"
            >
              <img
                src={optimizeCloudinaryUrl(img.url, { width: 400, height: 400 })}
                alt="Gallery item"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Actions Overlay */}
              <div className="absolute top-2 right-2 z-10">
                <button
                  onClick={() => setDeletingId(img._id)}
                  className="p-2 bg-red-500/90 backdrop-blur-md text-white rounded-full shadow-md hover:bg-red-600 hover:scale-110 transition-all"
                  aria-label="Delete image"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visibleImages.length === 0 && (
        <div className="text-center py-20">
          <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <ImageIcon size={32} />
          </div>
          <p className="text-lg font-bold text-gray-500">No images found.</p>
          <p className="text-sm text-gray-400">Click "Upload Image" to add some to this category.</p>
        </div>
      )}

      {/* Add Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <h3 className="text-xl font-black text-text">
                  Upload Image
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
                  {/* Category Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                      Category
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setUploadCategory('products')}
                        className={`p-3 rounded-xl font-bold text-sm border-2 transition-all ${uploadCategory === 'products' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                      >
                        Our Creations
                      </button>
                      <button
                        type="button"
                        onClick={() => setUploadCategory('machinery')}
                        className={`p-3 rounded-xl font-bold text-sm border-2 transition-all ${uploadCategory === 'machinery' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-500 hover:border-gray-200'}`}
                      >
                        The Tech
                      </button>
                    </div>
                  </div>

                  {/* Image Upload Area */}
                  <div>
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-2 block flex justify-between">
                      <span>Image Files</span>
                      {imagePreviews.length > 0 && (
                        <span className="text-primary cursor-pointer hover:underline" onClick={() => fileInputRef.current?.click()}>
                          + Add More
                        </span>
                      )}
                    </label>
                    <div 
                      className={`w-full ${imagePreviews.length === 0 ? 'aspect-square' : 'min-h-[200px] p-4'} rounded-2xl border-2 border-dashed ${
                        imagePreviews.length > 0 ? 'border-primary bg-primary/5' : 'border-gray-200 bg-gray-50'
                      } flex items-center justify-center relative transition-colors`}
                      onClick={imagePreviews.length === 0 ? () => fileInputRef.current?.click() : undefined}
                    >
                      {imagePreviews.length > 0 ? (
                        <div className="grid grid-cols-3 gap-3 w-full h-full content-start">
                          {imagePreviews.map((preview, idx) => (
                            <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm group">
                              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                              <button
                                type="button"
                                onClick={() => removeSelectedImage(idx)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center p-6 cursor-pointer w-full h-full flex flex-col justify-center items-center group hover:bg-gray-100 transition-colors">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-3 text-primary group-hover:scale-110 transition-transform">
                            <ImageIcon size={24} />
                          </div>
                          <p className="text-sm font-bold text-gray-600">Click to select images</p>
                          <p className="text-[10px] font-medium text-gray-400 mt-1">Select multiple JPEG, PNG or WEBP files</p>
                        </div>
                      )}
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageChange}
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                    </div>
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
                      <Loader2 size={18} className="animate-spin" /> Uploading...
                    </>
                  ) : (
                    'Upload'
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
              <h3 className="text-xl font-black text-text mb-2">Delete Image?</h3>
              <p className="text-gray-500 text-sm mb-6">
                Are you sure you want to delete this image? This action cannot be undone.
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

export default ManageGallery;
