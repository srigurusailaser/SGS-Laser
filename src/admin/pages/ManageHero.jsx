import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Loader2, Type } from 'lucide-react';
import toast from 'react-hot-toast';
import { apiFetch } from '../../utils/api';

const ManageHero = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: 'High Precision\nLaser\nCutting',
    subtitle: 'Sri Guru Sai Laser provides top-tier CNC laser cutting Bengaluru, metal fabrication, and stainless steel laser cutting. We transform your concepts into high-precision masterpieces using advanced industrial laser technology.',
    buttonText: 'Start Project',
  });

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const res = await apiFetch('/api/content/hero');
      if (res.ok) {
        const data = await res.json();
        if (data && Object.keys(data).length > 0) {
          setFormData(data);
        }
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
      toast.error('Failed to load current Hero content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const token = localStorage.getItem('adminToken');
      const res = await apiFetch('/api/content/hero', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success('Hero section updated successfully!');
      } else {
        const err = await res.json();
        toast.error(err.message || 'Failed to update hero section');
      }
    } catch (error) {
      console.error('Save error:', error);
      toast.error('Network error while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50"
      >
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-50">
          <div className="p-4 bg-primary/10 text-primary rounded-2xl">
            <Type size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-text">Edit Hero Content</h2>
            <p className="text-sm font-medium text-gray-500">Update the main text that appears at the top of your homepage.</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Main Title (Use enter for new lines)
            </label>
            <textarea
              name="title"
              value={formData.title}
              onChange={handleChange}
              rows={3}
              required
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-text text-xl resize-none"
              placeholder="High Precision&#10;Laser&#10;Cutting"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Subtitle / Description
            </label>
            <textarea
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-gray-600 resize-none leading-relaxed"
              placeholder="Enter the description..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Primary Button Text
            </label>
            <input
              type="text"
              name="buttonText"
              value={formData.buttonText}
              onChange={handleChange}
              required
              className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-text"
              placeholder="Start Project"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={saving}
              className="group bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-[0_10px_20px_rgba(83,28,179,0.2)] hover:shadow-[0_15px_30px_rgba(83,28,179,0.4)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex items-center gap-3"
            >
              {saving ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Saving Changes...
                </>
              ) : (
                <>
                  <Save size={20} className="group-hover:scale-110 transition-transform" />
                  Save Content
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ManageHero;
