import { Router } from 'express';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { getAdminDashboard, getUserDashboard } from '../controllers/dashboardController.js';

const router = Router();

// User dashboard summary (requires auth)
router.get('/me', authenticateToken, getUserDashboard);

// Admin dashboard summary (requires admin)
router.get('/admin', authenticateToken, requireAdmin, getAdminDashboard);

export default router;
