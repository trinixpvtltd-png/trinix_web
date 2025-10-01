import mongoose from './db.js';

const researchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  abstract: String,
  document_url: String,
  published_at: Date,
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model('Research', researchSchema);


