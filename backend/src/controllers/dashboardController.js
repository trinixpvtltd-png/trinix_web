import User from '../models/User.js';
import Project from '../models/Project.js';
import Research from '../models/Research.js';
import Job from '../models/Job.js';

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


