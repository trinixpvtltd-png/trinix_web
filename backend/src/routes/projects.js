import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { listProjects, getProject, createProject, updateProject, deleteProject } from '../controllers/projectsController.js';

const router = Router();

router.get('/', listProjects);
router.get('/:id', getProject);
router.post('/', authenticateToken, createProject);
router.put('/:id', authenticateToken, updateProject);
router.delete('/:id', authenticateToken, deleteProject);

export default router;

