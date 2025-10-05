import User from '../models/User_modal.js';
import ProjectIdea from '../models/Project_Idea_modal.js';
import Job from '../models/Job_model.js';

// Admin: get a single user by id
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select('first_name last_name email company role verified created_at last_login');
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    return res.json({ success: true, user });
  } catch (err) {
    console.error('Admin getUserById error:', err && (err.stack || err));
    return res.status(500).json({ success: false, message: err?.message || 'Failed to fetch user' });
  }
};

// Admin: update a user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const allowed = ['first_name', 'last_name', 'email', 'company', 'role', 'verified'];
    const updates = {};
    for (const k of allowed) {
      if (Object.prototype.hasOwnProperty.call(req.body, k)) updates[k] = req.body[k];
    }
    if (Object.keys(updates).length === 0) return res.status(400).json({ success: false, message: 'No valid fields to update' });
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    Object.assign(user, updates);
    await user.save();
    return res.json({ success: true, message: 'User updated', user });
  } catch (err) {
    console.error('Admin updateUser error:', err && (err.stack || err));
    return res.status(500).json({ success: false, message: err?.message || 'Failed to update user' });
  }
};

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
    // Use findByIdAndDelete to avoid relying on document.remove (may be removed/deprecated in some Mongoose versions)
    await ProjectIdea.findByIdAndDelete(id);
    return res.json({ success: true, message: 'Idea deleted' });
  } catch (err) {
    // Log full stack for debugging
    console.error('Admin deleteIdea error:', err && (err.stack || err));
    // Return the underlying message if available to help frontend debugging (avoid leaking sensitive details in production)
    const message = err?.message || 'Failed to delete idea';
    return res.status(500).json({ success: false, message });
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

// ----------------------
// Job management (admin)
// ----------------------

// POST /api/jobs  (admin only)
export const createJob = async (req, res) => {
  try {
    const { title, location, type, description, salary, is_active = true } = req.body;
    if (!title) return res.status(400).json({ success: false, message: 'Title is required' });
    const job = await Job.create({
      title,
      location,
      type,
      description,
      salary,
      is_active: typeof is_active === 'boolean' ? is_active : true,
      posted_by: req.user?.id,
      created_at: new Date()
    });
    return res.status(201).json({ success: true, message: 'Job created', job });
  } catch (err) {
    console.error('Admin createJob error:', err && (err.stack || err));
    return res.status(500).json({ success: false, message: 'Failed to create job' });
  }
};

// PUT /api/jobs/:id (admin only)
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = {};
    const allowed = ['title', 'location', 'type', 'description', 'salary', 'is_active'];
    for (const k of allowed) if (Object.prototype.hasOwnProperty.call(req.body, k)) updates[k] = req.body[k];
    if (Object.keys(updates).length === 0) return res.status(400).json({ success: false, message: 'No valid fields to update' });
    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    Object.assign(job, updates, { updated_at: new Date() });
    await job.save();
    return res.json({ success: true, message: 'Job updated', job });
  } catch (err) {
    console.error('Admin updateJob error:', err && (err.stack || err));
    return res.status(500).json({ success: false, message: 'Failed to update job' });
  }
};

// GET /api/admin/jobs (admin list)
export const getAllJobsAdmin = async (req, res) => {
  try {
    // Populate posted_by and nested application user info so admin can review applicants
    const jobs = await Job.find()
      .sort({ created_at: -1 })
      .populate('posted_by', 'first_name last_name email')
      .populate('applications.user_id', 'first_name last_name email phone');

    // Add a lightweight applicationCount per job and overall totalApplications
    const jobsWithCounts = jobs.map(j => ({
      ...j.toObject(),
      applicationCount: Array.isArray(j.applications) ? j.applications.length : 0
    }));
    const totalApplications = jobsWithCounts.reduce((acc, j) => acc + (j.applicationCount || 0), 0);

    return res.json({ success: true, count: jobs.length, totalApplications, jobs: jobsWithCounts });
  } catch (err) {
    console.error('Admin getAllJobs error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch jobs' });
  }
};

// GET /api/admin/jobs/:id
export const getJobByIdAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    // Populate posted_by and applications' user details so admin sees full applicant info
    const job = await Job.findById(id)
      .populate('posted_by', 'first_name last_name email')
      .populate('applications.user_id', 'first_name last_name email phone');
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    const jobObj = job.toObject();
    jobObj.applicationCount = Array.isArray(jobObj.applications) ? jobObj.applications.length : 0;
    return res.json({ success: true, job: jobObj });
  } catch (err) {
    console.error('Admin getJobById error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch job' });
  }
};

// DELETE /api/admin/jobs/:id
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    await Job.findByIdAndDelete(id);
    return res.json({ success: true, message: 'Job deleted' });
  } catch (err) {
    console.error('Admin deleteJob error:', err && (err.stack || err));
    return res.status(500).json({ success: false, message: 'Failed to delete job' });
  }
};

// PATCH /api/admin/jobs/:jobId/applications/:appId/review
// Body: { action: 'approve'|'reject' }
export const reviewJobApplication = async (req, res) => {
  try {
    const { jobId, appId } = req.params;
    const { action } = req.body;
    console.debug('reviewJobApplication called by', req.user?.email || req.user?.id, { jobId, appId, action });
    if (!['approve', 'reject'].includes(action)) return res.status(400).json({ success: false, message: 'Invalid action' });
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });

    const appIndex = job.applications.findIndex(a => String(a._id) === String(appId) || String(a.id) === String(appId));
    if (appIndex === -1) return res.status(404).json({ success: false, message: 'Application not found' });

    const app = job.applications[appIndex];
    app.status = action === 'approve' ? 'approved' : 'rejected';
    app.reviewed_by = req.user?.id;
    app.reviewed_at = new Date();

    // Set the modified subdocument and save
    job.markModified('applications');
    await job.save();

    // Populate applicant user data if present
    const populated = await Job.findById(jobId).populate('applications.user_id', 'first_name last_name email phone');
    const updatedApp = populated.applications.id(app._id);

    return res.json({ success: true, message: `Application ${action}d`, application: updatedApp });
  } catch (err) {
    console.error('reviewJobApplication error:', err && (err.stack || err));
    return res.status(500).json({ success: false, message: 'Failed to review application' });
  }
};

export default { getAllUsers };


