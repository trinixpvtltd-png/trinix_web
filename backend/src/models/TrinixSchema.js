import mongoose from './db.js';

const trinixSchema = new mongoose.Schema({
  user: {
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    role: { type: String, required: true, enum: ['user', 'admin'] },
    created_at: { type: Date, default: Date.now }
  },
  project: {
    title: { type: String, required: true },
    description: String,
    image_url: String,
    published_at: Date,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  research: {
    title: { type: String, required: true },
    abstract: String,
    document_url: String,
    published_at: Date,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  job: {
    title: { type: String, required: true },
    location: String,
    type: String,
    description: String,
    is_active: { type: Boolean, default: true },
    posted_at: { type: Date, default: Date.now },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }
});

export default mongoose.model('Trinix', trinixSchema);
