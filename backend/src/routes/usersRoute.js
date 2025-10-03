import { Router } from 'express';
import { signup, login, logout, postProjectIdea, getAllProjectIdeas, getMyProjectIdeas, getUserDashboard } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// Public user signup route
router.post('/signup', signup);

// Public user login route
router.post('/login', login);

// Authenticated logout route (stateless JWT): frontend should delete token
router.post('/logout', authenticateToken, logout);

// Submit a new project/research idea
router.post('/ideas', authenticateToken, postProjectIdea);

// List all project/research ideas (public)
router.get('/ideas', getAllProjectIdeas);

// List the authenticated user's ideas
router.get('/ideas/mine', authenticateToken, getMyProjectIdeas);

// User dashboard summary (profile + idea stats + recent ideas)
router.get('/dashboard', authenticateToken, getUserDashboard);

export default router;
