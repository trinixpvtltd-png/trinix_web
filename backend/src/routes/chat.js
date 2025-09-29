import { Router } from 'express';
import { chatHandler } from '../services/chatService.js';

const router = Router();

router.post('/', async (req, res) => {
  const { question, sessionId } = req.body || {};
  if (!question) return res.status(400).json({ error: 'Question is required' });
  try {
    const answer = await chatHandler(question, sessionId);
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;


