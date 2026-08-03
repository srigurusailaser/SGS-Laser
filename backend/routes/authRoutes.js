import express from 'express';
import { loginRequestOTP, verifyOTP } from '../controllers/authController.js';

const router = express.Router();

router.post('/login/request', loginRequestOTP);
router.post('/login/verify', verifyOTP);

export default router;
