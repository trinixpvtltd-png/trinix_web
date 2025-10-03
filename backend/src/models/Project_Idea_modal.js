import mongoose from './db.js';

// Enumerations aligned with the frontend Submit New Idea form
const IDEA_TYPES = ['research', 'project']; // Research Idea | Project Concept
const CATEGORIES = [
  'AI & ML',
  'Healthcare',
  'Fintech',
  'Education',
  'Smart Cities',
  'Sustainability',
  'Blockchain',
  'IoT',
  'Other'
];
const PRIORITIES = ['low', 'medium', 'high'];
const STATUSES = ['Draft', 'Prelisted', 'Published'];

// Schema supports both "project concept" and "research idea" submissions
const projectIdeaSchema = new mongoose.Schema(
  {
    // Who created the idea (support both keys for compatibility with controllers)
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    // Core fields
    type: { type: String, enum: IDEA_TYPES, required: true }, // research | project
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, enum: CATEGORIES, required: true },
    tags: { type: [String], default: [] },
    priority: { type: String, enum: PRIORITIES, default: 'medium' },
    expected_outcome: { type: String },
    resources: { type: String },

    // Publishing and media (optional)
  status: { type: String, enum: STATUSES, default: 'Prelisted' },
    image_url: { type: String },
    published_at: { type: Date }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

// Helpful indexes
projectIdeaSchema.index({ created_by: 1, created_at: -1 });
projectIdeaSchema.index({ user_id: 1, created_at: -1 });
projectIdeaSchema.index({ type: 1, category: 1, priority: 1 });

export default mongoose.model('Project', projectIdeaSchema);


