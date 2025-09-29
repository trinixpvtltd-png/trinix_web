import { Router } from 'express';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { listJobs, getJob, createJob, updateJob, deleteJob } from '../controllers/jobsController.js';

const router = Router();

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', authenticateToken, requireAdmin, createJob);
router.put('/:id', authenticateToken, requireAdmin, updateJob);
router.delete('/:id', authenticateToken, requireAdmin, deleteJob);

export default router;

