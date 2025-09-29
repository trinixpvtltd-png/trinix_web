import { Router } from 'express';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { listProjects, getProject, createProject, updateProject, deleteProject } from '../controllers/projectsController.js';

const router = Router();

router.get('/', listProjects);
router.get('/:id', getProject);
router.post('/', authenticateToken, requireAdmin, createProject);
router.put('/:id', authenticateToken, requireAdmin, updateProject);
router.delete('/:id', authenticateToken, requireAdmin, deleteProject);

export default router;

