import db from '../models/db.js';
import { projectSchema } from '../utils/validators.js';

export function listProjects(req, res) {
  const rows = db.prepare('SELECT * FROM projects ORDER BY id DESC').all();
  res.json(rows);
}

export function getProject(req, res) {
  const id = Number(req.params.id);
  const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
  if (!row) return res.status(404).json({ message: 'Not found' });
  res.json(row);
}

export function createProject(req, res) {
  const { error, value } = projectSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { title, description, image_url, published_at } = value;
  const info = db.prepare('INSERT INTO projects (title, description, image_url, published_at, created_by) VALUES (?, ?, ?, ?, ?)')
    .run(title, description, image_url, published_at, req.user?.id ?? null);
  const created = db.prepare('SELECT * FROM projects WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json(created);
}

export function updateProject(req, res) {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ message: 'Not found' });
  const { error, value } = projectSchema.validate(req.body, { allowUnknown: false });
  if (error) return res.status(400).json({ message: error.message });
  const { title, description, image_url, published_at } = value;
  db.prepare('UPDATE projects SET title=?, description=?, image_url=?, published_at=? WHERE id=?')
    .run(title, description, image_url, published_at, id);
  const updated = db.prepare('SELECT * FROM projects WHERE id = ?').get(id);
  res.json(updated);
}

export function deleteProject(req, res) {
  const id = Number(req.params.id);
  const info = db.prepare('DELETE FROM projects WHERE id = ?').run(id);
  if (info.changes === 0) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
}

