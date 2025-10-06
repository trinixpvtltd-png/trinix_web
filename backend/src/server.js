import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from './models/db.js';    

import authRoutes from './routes/auth.js';
import usersRoutes from './routes/usersRoute.js';
import adminRoutes from './routes/admin.js';
import jobsRoutes from './routes/jobs.js';

import { chattingGPT } from './controllers/chatControllerGpt.js'; //GPT wallah

const app = express();

app.use(helmet());

// Configure CORS properly
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.com'] // Replace with actual frontend domain
    : ['http://localhost:3000', 'http://127.0.0.1:3000'], // Allow React dev server
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));


// Mount routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/jobs', jobsRoutes);

// Chat route (preserved)
app.post('/chat', async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }
  try {
    const answer = await chattingGPT(question);
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

