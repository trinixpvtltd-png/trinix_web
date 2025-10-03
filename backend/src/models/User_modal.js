import mongoose from './db.js';

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  password_hash: { 
    type: String, 
    required: true 
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  role: { 
    type: String, 
    enum: ['user', 'admin', 'agent'], 
    default: 'user' 
  },
  verified: {   //use nhi ho rha 
    type: Boolean,
    default: false
  },
  verification_token: String,
  reset_password_token: String,
  reset_password_expires: Date,
  last_login: Date,
  created_at: { 
    type: Date, 
    default: Date.now 
  },
  updated_at: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('User', userSchema);


