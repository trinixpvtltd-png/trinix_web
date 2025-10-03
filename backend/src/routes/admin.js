import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { getAllUsers } from '../controllers/adminController.js';

// Simple role guard: assumes authenticateToken has set req.user.role
const requireAdmin = (req, res, next) => {
  if (req?.user?.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Forbidden: Admins only' });
  }
  next();
};

const router = Router();

// List all users (admin only)
router.get('/users', authenticateToken, requireAdmin, getAllUsers);

export default router;
