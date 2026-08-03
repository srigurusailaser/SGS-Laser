import jwt from 'jsonwebtoken';
import { sendEmail } from '../utils/brevo.js';
import Otp from '../models/Otp.js';
import Admin from '../models/Admin.js';

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const loginRequestOTP = async (req, res) => {
  const { email } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (email.toLowerCase() !== adminEmail.toLowerCase()) {
    return res.status(401).json({ message: 'Unauthorized. Invalid admin email address.' });
  }

  const otp = generateOTP();
  console.log(`\n========================================`);
  console.log(`🔑 ADMIN OTP: ${otp}`);
  console.log(`========================================\n`);
  
  try {
    // Delete any existing OTPs for this email to prevent spam
    await Otp.deleteMany({ email: email.toLowerCase() });

    // Create new OTP in DB
    await Otp.create({
      email: email.toLowerCase(),
      otp: otp
    });

    await sendEmail(
      "Your Admin Login OTP - SGS Lasers",
      `<html><body><h1>Admin Login</h1><p>Your OTP is: <strong>${otp}</strong></p><p>This OTP is valid for 10 minutes.</p></body></html>`,
      { name: "SGS Lasers System", email: process.env.FROM_EMAIL || adminEmail },
      [{ email: adminEmail, name: "Admin" }]
    );
    
    res.status(200).json({ message: 'OTP sent to your admin email address successfully.' });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    res.status(500).json({ message: 'Error sending OTP' });
  }
};

const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  
  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  try {
    const storedOtp = await Otp.findOne({ email: email.toLowerCase() });

    if (!storedOtp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    if (storedOtp.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // OTP is valid, delete it
    await Otp.deleteOne({ _id: storedOtp._id });

    // Check if Admin user exists, if not create one
    let admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin) {
      admin = await Admin.create({ email: email.toLowerCase(), role: 'admin' });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role, email: admin.email },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token
    });
  } catch (error) {
    console.error('Verify error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { loginRequestOTP, verifyOTP };
