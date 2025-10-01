import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { listResearches, getResearch, createResearch, updateResearch, deleteResearch } from '../controllers/researchesController.js';

const router = Router();

router.get('/', listResearches);
router.get('/:id', getResearch);
router.post('/', authenticateToken, createResearch);
router.put('/:id', authenticateToken, updateResearch);
router.delete('/:id', authenticateToken, deleteResearch);

export default router;

