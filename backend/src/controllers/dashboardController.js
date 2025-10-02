import User from '../models/User.js';
import Project from '../models/Project.js';
import Research from '../models/Research.js';
import Job from '../models/Job.js';
import Idea from '../models/Idea.js';

export function getUserDashboard(req, res) {
  const userId = req.user?.id;
  if (!userId) return res.status(401).json({ message: 'Unauthorized' });

  Promise.all([
    Project.find({ created_by: userId }).sort({ _id: -1 }),
    Research.find({ created_by: userId }).sort({ _id: -1 }),
    Job.find({ created_by: userId }).sort({ _id: -1 }),
  ]).then(([projects, researches, jobs]) => {
    const totals = { projects: projects.length, researches: researches.length, jobs: jobs.length };
    res.json({ totals, projects, researches, jobs });
  }).catch((e) => res.status(500).json({ message: e.message }));
}

export function getAdminDashboard(req, res) {
  Promise.all([
    User.find({}, { email: 1, role: 1, created_at: 1 }),
    Project.find().sort({ _id: -1 }),
    Research.find().sort({ _id: -1 }),
    Job.find().sort({ _id: -1 }),
  ]).then(([users, projects, researches, jobs]) => {
    const totals = { users: users.length, projects: projects.length, researches: researches.length, jobs: jobs.length };
    res.json({ totals, users, projects, researches, jobs });
  }).catch((e) => res.status(500).json({ message: e.message }));
}

// Get dashboard stats for authenticated user
export async function getDashboardStats(req, res) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const [ideas, projects, researches] = await Promise.all([
      Idea.find({ user_id: userId }),
      Project.find({ created_by: userId }),
      Research.find({ created_by: userId })
    ]);

    const publishedIdeas = ideas.filter(idea => idea.status === 'Published').length;
    const pendingIdeas = ideas.filter(idea => idea.status === 'Under Review').length;

    res.json({
      totalIdeas: ideas.length,
      publishedIdeas,
      pendingIdeas,
      totalProjects: projects.length,
      totalResearches: researches.length
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get user ideas
export async function getUserIdeas(req, res) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const ideas = await Idea.find({ user_id: userId })
      .sort({ created_at: -1 })
      .populate('user_id', 'first_name last_name email');

    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Submit new idea
export async function submitIdea(req, res) {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const {
      type,
      title,
      description,
      category,
      tags,
      priority,
      expected_outcome,
      resources
    } = req.body;

    // Basic validation
    if (!type || !title || !description || !category) {
      return res.status(400).json({ 
        message: 'Missing required fields: type, title, description, category' 
      });
    }

    const idea = new Idea({
      user_id: userId,
      type,
      title,
      description,
      category,
      tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map(t => t.trim()) : []),
      priority: priority || 'medium',
      expected_outcome,
      resources
    });

    await idea.save();
    await idea.populate('user_id', 'first_name last_name email');

    res.status(201).json({
      success: true,
      message: 'Idea submitted successfully',
      idea
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update idea
export async function updateIdea(req, res) {
  try {
    const userId = req.user?.id;
    const ideaId = req.params.id;
    
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const idea = await Idea.findOne({ _id: ideaId, user_id: userId });
    if (!idea) {
      return res.status(404).json({ message: 'Idea not found or not authorized' });
    }

    // Update allowed fields
    const allowedUpdates = ['title', 'description', 'category', 'tags', 'priority', 'expected_outcome', 'resources'];
    const updates = {};
    
    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        if (field === 'tags' && typeof req.body[field] === 'string') {
          updates[field] = req.body[field].split(',').map(t => t.trim());
        } else {
          updates[field] = req.body[field];
        }
      }
    });

    Object.assign(idea, updates);
    await idea.save();
    await idea.populate('user_id', 'first_name last_name email');

    res.json({
      success: true,
      message: 'Idea updated successfully',
      idea
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete idea
export async function deleteIdea(req, res) {
  try {
    const userId = req.user?.id;
    const ideaId = req.params.id;
    
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const idea = await Idea.findOneAndDelete({ _id: ideaId, user_id: userId });
    if (!idea) {
      return res.status(404).json({ message: 'Idea not found or not authorized' });
    }

    res.json({
      success: true,
      message: 'Idea deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


