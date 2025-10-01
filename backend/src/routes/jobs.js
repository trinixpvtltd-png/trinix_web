import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { listJobs, getJob, createJob, updateJob, deleteJob } from '../controllers/jobsController.js';

const router = Router();

router.get('/', listJobs);
router.get('/:id', getJob);
router.post('/', authenticateToken, createJob);
router.put('/:id', authenticateToken, updateJob);
router.delete('/:id', authenticateToken, deleteJob);

export default router;

