import mongoose from './db.js';

const applicationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  experience: { type: String },
  portfolio: { type: String },
  resume: { type: String },
  coverLetter: { type: String },
  applied_at: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  reviewed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  reviewed_at: { type: Date, required: false }
});

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  location: { type: String, trim: true },
  type: { type: String, enum: ['full-time', 'internship', 'part-time'], required: true, trim: true },
  description: { type: String },
  salary: { type: String },
  is_active: { type: Boolean, default: true },
  posted_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  applications: { type: [applicationSchema], default: [] }
});

export default mongoose.model('Job', jobSchema);
