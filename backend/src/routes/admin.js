import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { getAllUsers, getAllIdeas, getIdeaById, deleteIdea, setIdeaPublishState, getUserById, updateUser } from '../controllers/adminController.js';
import { seedAll } from '../seeders/seedAll.js';

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
// Admin user detail and update
router.get('/users/:id', authenticateToken, requireAdmin, getUserById);
router.put('/users/:id', authenticateToken, requireAdmin, updateUser);

// Admin idea management
router.get('/ideas', authenticateToken, requireAdmin, getAllIdeas);
router.get('/ideas/:id', authenticateToken, requireAdmin, getIdeaById);
router.delete('/ideas/:id', authenticateToken, requireAdmin, deleteIdea);
router.post('/ideas/:id/publish', authenticateToken, requireAdmin, setIdeaPublishState);

// Dev-only: seed test data (POST)
router.post('/seed-test-data', seedAll);

export default router;
