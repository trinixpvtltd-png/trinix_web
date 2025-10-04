import { Router } from 'express';
import Job from '../models/Job_model.js';
import jwt from 'jsonwebtoken';
import { applyToJob } from '../controllers/userController.js';

const router = Router();

// Public list of jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ is_active: true }).sort({ created_at: -1 });
    return res.json({ success: true, count: jobs.length, jobs });
  } catch (err) {
    console.error('Get jobs error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch jobs' });
  }
});

// Get a single job
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    return res.json({ success: true, job });
  } catch (err) {
    console.error('Get job error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch job' });
  }
});

// Apply to a job (auth optional). If Authorization header with Bearer token is present it will be attached.
router.post('/:id/apply', applyToJob);

export default router;
