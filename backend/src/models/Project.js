import mongoose from './db.js';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image_url: String,
  published_at: Date,
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model('Project', projectSchema);


