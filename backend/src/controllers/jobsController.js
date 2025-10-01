import Job from '../models/Job.js';
import { jobSchema } from '../utils/validators.js';

export function listJobs(req, res) {
  Job.find({ is_active: true }).sort({ _id: -1 }).then((rows) => res.json(rows)).catch((e) => res.status(500).json({ message: e.message }));
}

export function getJob(req, res) {
  const id = req.params.id;
  Job.findById(id).then((row) => {
    if (!row) return res.status(404).json({ message: 'Not found' });
    res.json(row);
  }).catch((e) => res.status(500).json({ message: e.message }));
}

export function createJob(req, res) {
  const { error, value } = jobSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { title, location, type, description, is_active } = value;
  if (!req.user || !req.user.id) return res.status(401).json({ message: 'Unauthorized' });
  Job.create({ title, location, type, description, is_active: is_active ?? true, created_by: req.user.id })
    .then((doc) => res.status(201).json(doc))
    .catch((e) => res.status(500).json({ message: e.message }));
}

export function updateJob(req, res) {
  const id = req.params.id;
  Job.findById(id).then((existing) => {
    if (!existing) return res.status(404).json({ message: 'Not found' });
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const isOwner = String(existing.created_by) === String(req.user.id);
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) return res.status(403).json({ message: 'Forbidden' });
    const { error, value } = jobSchema.validate(req.body, { allowUnknown: false });
    if (error) return res.status(400).json({ message: error.message });
    const { title, location, type, description, is_active } = value;
    existing.title = title;
    existing.location = location;
    existing.type = type;
    existing.description = description;
    if (typeof is_active === 'boolean') existing.is_active = is_active;
    return existing.save().then((updated) => res.json(updated));
  }).catch((e) => res.status(500).json({ message: e.message }));
}

export function deleteJob(req, res) {
  const id = req.params.id;
  Job.findById(id).then((existing) => {
    if (!existing) return res.status(404).json({ message: 'Not found' });
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const isOwner = String(existing.created_by) === String(req.user.id);
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) return res.status(403).json({ message: 'Forbidden' });
    return existing.deleteOne().then(() => res.status(204).send());
  }).catch((e) => res.status(500).json({ message: e.message }));
}

