import Project from '../models/Project.js';
import { projectSchema } from '../utils/validators.js';

export function listProjects(req, res) {
  Project.find().sort({ _id: -1 }).then((rows) => res.json(rows)).catch((e) => res.status(500).json({ message: e.message }));
}

export function getProject(req, res) {
  const id = req.params.id;
  Project.findById(id).then((row) => {
    if (!row) return res.status(404).json({ message: 'Not found' });
    res.json(row);
  }).catch((e) => res.status(500).json({ message: e.message }));
}

export function createProject(req, res) {
  const { error, value } = projectSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { title, description, image_url, published_at } = value;
  if (!req.user || !req.user.id) return res.status(401).json({ message: 'Unauthorized' });
  Project.create({ title, description, image_url, published_at, created_by: req.user.id })
    .then((doc) => res.status(201).json(doc))
    .catch((e) => res.status(500).json({ message: e.message }));
}

export function updateProject(req, res) {
  const id = req.params.id;
  Project.findById(id).then((existing) => {
    if (!existing) return res.status(404).json({ message: 'Not found' });
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const isOwner = String(existing.created_by) === String(req.user.id);
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) return res.status(403).json({ message: 'Forbidden' });
    const { error, value } = projectSchema.validate(req.body, { allowUnknown: false });
    if (error) return res.status(400).json({ message: error.message });
    const { title, description, image_url, published_at } = value;
    existing.title = title;
    existing.description = description;
    existing.image_url = image_url;
    existing.published_at = published_at;
    return existing.save().then((updated) => res.json(updated));
  }).catch((e) => res.status(500).json({ message: e.message }));
}

export function deleteProject(req, res) {
  const id = req.params.id;
  Project.findById(id).then((existing) => {
    if (!existing) return res.status(404).json({ message: 'Not found' });
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const isOwner = String(existing.created_by) === String(req.user.id);
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) return res.status(403).json({ message: 'Forbidden' });
    return existing.deleteOne().then(() => res.status(204).send());
  }).catch((e) => res.status(500).json({ message: e.message }));
}

