import User from '../models/User_modal.js';
import ProjectIdea from '../models/Project_Idea_modal.js';

// GET /api/admin/users
// Requires: authenticateToken + requireAdmin
// Optional query params: q (search by name/email), page, limit
export const getAllUsers = async (req, res) => {
  try {
    const { q, page = 1, limit = 25 } = req.query;
    const numericLimit = Math.min(Math.max(parseInt(limit, 10) || 25, 1), 100);
    const skip = (Math.max(parseInt(page, 10) || 1, 1) - 1) * numericLimit;

    const filter = {};
    if (q && String(q).trim()) {
      const regex = new RegExp(String(q).trim(), 'i');
      filter.$or = [
        { first_name: regex },
        { last_name: regex },
        { email: regex },
        { company: regex }
      ];
    }

    const [users, total] = await Promise.all([
      User.find(filter)
        .select('first_name last_name email company role verified created_at last_login')
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(numericLimit),
      User.countDocuments(filter)
    ]);

    return res.json({
      success: true,
      total,
      page: Math.max(parseInt(page, 10) || 1, 1),
      limit: numericLimit,
      users
    });
  } catch (err) {
    console.error('Admin getAllUsers error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch users' });
  }
};

// GET /api/admin/ideas
// Query params: q (search title/desc), type (research|project), page, limit
export const getAllIdeas = async (req, res) => {
  try {
    const { q, type, page = 1, limit = 25 } = req.query;
    const numericLimit = Math.min(Math.max(parseInt(limit, 10) || 25, 1), 200);
    const skip = (Math.max(parseInt(page, 10) || 1, 1) - 1) * numericLimit;

    const filter = {};
    if (type && (type === 'research' || type === 'project')) filter.type = type;
    if (q && String(q).trim()) {
      const regex = new RegExp(String(q).trim(), 'i');
      filter.$or = [ { title: regex }, { description: regex } ];
    }

    const [ideas, total] = await Promise.all([
      ProjectIdea.find(filter)
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(numericLimit)
        .populate('user_id', 'first_name last_name email'),
      ProjectIdea.countDocuments(filter)
    ]);

    return res.json({ success: true, total, page: Math.max(parseInt(page, 10) || 1, 1), limit: numericLimit, ideas });
  } catch (err) {
    console.error('Admin getAllIdeas error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch ideas' });
  }
};

// GET /api/admin/ideas/:id
export const getIdeaById = async (req, res) => {
  try {
    const { id } = req.params;
    const idea = await ProjectIdea.findById(id).populate('user_id', 'first_name last_name email');
    if (!idea) return res.status(404).json({ success: false, message: 'Idea not found' });
    return res.json({ success: true, idea });
  } catch (err) {
    console.error('Admin getIdeaById error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch idea' });
  }
};

// DELETE /api/admin/ideas/:id
export const deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    console.debug('Admin deleteIdea called by', req.user?.email, 'id=', id);
    const idea = await ProjectIdea.findById(id);
    if (!idea) return res.status(404).json({ success: false, message: 'Idea not found' });
    await idea.remove();
    return res.json({ success: true, message: 'Idea deleted' });
  } catch (err) {
    console.error('Admin deleteIdea error:', err);
    return res.status(500).json({ success: false, message: 'Failed to delete idea' });
  }
};

// POST /api/admin/ideas/:id/publish  body: { publish: true|false }
export const setIdeaPublishState = async (req, res) => {
  try {
    const { id } = req.params;
    const { publish } = req.body;
    console.debug('Admin setIdeaPublishState called by', req.user?.email, 'id=', id, 'publish=', publish);
    const idea = await ProjectIdea.findById(id);
    if (!idea) return res.status(404).json({ success: false, message: 'Idea not found' });
    idea.status = publish ? 'Published' : 'Prelisted';
    if (publish) idea.published_at = new Date();
    else idea.published_at = undefined;
    await idea.save();
    return res.json({ success: true, message: publish ? 'Published' : 'Unpublished', idea });
  } catch (err) {
    console.error('Admin setIdeaPublishState error:', err);
    return res.status(500).json({ success: false, message: 'Failed to update publish state' });
  }
};

export default { getAllUsers };


