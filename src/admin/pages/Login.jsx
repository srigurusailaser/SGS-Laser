import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from "../../assets/image-mapping";
import { optimizeCloudinaryUrl } from "../../utils/image-optimizer";
import { ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1 for email, 2 for OTP
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStep(2);
        toast.success(data.message);
      } else {
        toast.error(data.message || 'Error requesting OTP');
      }
    } catch (err) {
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        toast.success('Login successful!');
        navigate('/admin');
      } else {
        toast.error(data.message || 'Invalid OTP');
      }
    } catch (err) {
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full p-8 md:p-10 bg-white rounded-[32px] shadow-[0_20px_60px_rgba(83,28,179,0.08)] border border-gray-50 relative z-10"
      >
        <div className="text-center mb-10 flex flex-col items-center">
          <img
            src={optimizeCloudinaryUrl(images.logos.sgs, { height: 80, crop: 'limit' })}
            alt="Sri Guru Sai Laser"
            className="h-12 w-auto mb-6"
          />
          <h2 className="text-2xl font-black text-primary uppercase tracking-wider">
            Admin Portal
          </h2>
          <p className="text-lightText text-sm mt-2 font-medium">
            Secure access to SGS Lasers CMS
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleRequestOTP} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-primary/50 uppercase tracking-widest ml-1">
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold text-text placeholder:text-gray-400"
                  placeholder="Enter mail"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full group bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl font-black shadow-[0_10px_20px_rgba(83,28,179,0.2)] hover:shadow-[0_15px_30px_rgba(83,28,179,0.4)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="opacity-80">Requesting Access...</span>
              ) : (
                <>
                  Send OTP
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        ) : (
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleVerifyOTP} 
            className="space-y-6"
          >
            <div className="space-y-2 text-center">
              <label className="text-[10px] font-black text-primary/50 uppercase tracking-widest">
                Verification Code
              </label>
              <p className="text-xs text-lightText mb-2">Sent to {email}</p>
              <input
                type="text"
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all font-black text-3xl tracking-[0.5em] text-center text-text placeholder:text-gray-300"
                placeholder="------"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full group bg-secondary text-white py-4 rounded-2xl font-black shadow-[0_10px_20px_rgba(230,106,34,0.2)] hover:shadow-[0_15px_30px_rgba(230,106,34,0.4)] hover:-translate-y-0.5 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="opacity-80">Verifying...</span>
              ) : (
                <>
                  Verify & Login
                  <ShieldCheck size={18} />
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full mt-2 text-xs font-bold text-gray-400 hover:text-primary transition-colors py-2 uppercase tracking-widest"
            >
              Cancel
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
