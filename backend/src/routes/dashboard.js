import { Router } from 'express';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { 
  getAdminDashboard, 
  getUserDashboard, 
  getDashboardStats,
  getUserIdeas,
  submitIdea,
  updateIdea,
  deleteIdea
} from '../controllers/dashboardController.js';

const router = Router();

// User dashboard routes
router.get('/stats', authenticateToken, getDashboardStats);
router.get('/ideas', authenticateToken, getUserIdeas);
router.post('/ideas', authenticateToken, submitIdea);
router.put('/ideas/:id', authenticateToken, updateIdea);
router.delete('/ideas/:id', authenticateToken, deleteIdea);

// Legacy routes (for backward compatibility)
router.get('/me', authenticateToken, getUserDashboard);

// Admin dashboard summary (requires admin)
router.get('/admin', authenticateToken, requireAdmin, getAdminDashboard);

export default router;
