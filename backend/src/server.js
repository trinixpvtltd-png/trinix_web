import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from './models/db.js';    

import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import researchRoutes from './routes/researches.js';
import jobRoutes from './routes/jobs.js';

import dashboardRoutes from './routes/dashboard.js';
import chatRoutes from './routes/chat.js';

const app = express();

app.use(helmet());

// Configure CORS properly
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.com'] // Replace with actual frontend domain
    : ['http://localhost:3000', 'http://127.0.0.1:3000'], // Allow React dev server
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/researches', researchRoutes);
app.use('/api/jobs', jobRoutes);

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

