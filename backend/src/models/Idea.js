import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['research', 'project'],
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['Draft', 'Under Review', 'Published', 'Rejected'],
    default: 'Under Review'
  },
  expected_outcome: {
    type: String,
    trim: true
  },
  resources: {
    type: String,
    trim: true
  },
  views: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Update the updated_at field on save
ideaSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// Virtual for formatted date
ideaSchema.virtual('formatted_date').get(function() {
  return this.created_at.toISOString().split('T')[0];
});

// Ensure virtual fields are serialized
ideaSchema.set('toJSON', {
  virtuals: true
});

export default mongoose.model('Idea', ideaSchema);
