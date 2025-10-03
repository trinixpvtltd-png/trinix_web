import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { signup, login } from '../controllers/userController.js';
import User from '../models/User_modal.js';

const router = Router();

// Legacy auth routes for compatibility
router.post('/register', signup);
router.post('/login', login);

// Return current user profile
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user?.id).select('first_name last_name email company role verified created_at last_login');
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, user });
  } catch (err) {
    console.error('Auth /me error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch user' });
  }
});

export default router;