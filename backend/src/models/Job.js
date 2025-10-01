import mongoose from './db.js';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  type: String,
  description: String,
  is_active: { type: Boolean, default: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model('Job', jobSchema);


