import Research from '../models/Research.js';
import { researchSchema } from '../utils/validators.js';

export function listResearches(req, res) {
  Research.find().sort({ _id: -1 }).then((rows) => res.json(rows)).catch((e) => res.status(500).json({ message: e.message }));
}

export function getResearch(req, res) {
  const id = req.params.id;
  Research.findById(id).then((row) => {
    if (!row) return res.status(404).json({ message: 'Not found' });
    res.json(row);
  }).catch((e) => res.status(500).json({ message: e.message }));
}

export function createResearch(req, res) {
  const { error, value } = researchSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { title, abstract, document_url, published_at } = value;
  if (!req.user || !req.user.id) return res.status(401).json({ message: 'Unauthorized' });
  Research.create({ title, abstract, document_url, published_at, created_by: req.user.id })
    .then((doc) => res.status(201).json(doc))
    .catch((e) => res.status(500).json({ message: e.message }));
}

export function updateResearch(req, res) {
  const id = req.params.id;
  Research.findById(id).then((existing) => {
    if (!existing) return res.status(404).json({ message: 'Not found' });
  // Ownership or admin check
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  const isOwner = String(existing.created_by) === String(req.user.id);
  const isAdmin = req.user.role === 'admin';
  if (!isOwner && !isAdmin) return res.status(403).json({ message: 'Forbidden' });
  const { error, value } = researchSchema.validate(req.body, { allowUnknown: false });
  if (error) return res.status(400).json({ message: error.message });
  const { title, abstract, document_url, published_at } = value;
  existing.title = title;
  existing.abstract = abstract;
  existing.document_url = document_url;
  existing.published_at = published_at;
  return existing.save().then((updated) => res.json(updated));
  }).catch((e) => res.status(500).json({ message: e.message }));
}

export function deleteResearch(req, res) {
  const id = req.params.id;
  Research.findById(id).then((existing) => {
    if (!existing) return res.status(404).json({ message: 'Not found' });
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
    const isOwner = String(existing.created_by) === String(req.user.id);
    const isAdmin = req.user.role === 'admin';
    if (!isOwner && !isAdmin) return res.status(403).json({ message: 'Forbidden' });
    return existing.deleteOne().then(() => res.status(204).send());
  }).catch((e) => res.status(500).json({ message: e.message }));
}

