import { Router } from 'express';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { listResearches, getResearch, createResearch, updateResearch, deleteResearch } from '../controllers/researchesController.js';

const router = Router();

router.get('/', listResearches);
router.get('/:id', getResearch);
router.post('/', authenticateToken, requireAdmin, createResearch);
router.put('/:id', authenticateToken, requireAdmin, updateResearch);
router.delete('/:id', authenticateToken, requireAdmin, deleteResearch);

export default router;

