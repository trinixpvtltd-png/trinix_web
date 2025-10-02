// MongoDB connection using mongoose
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

export default mongoose;
