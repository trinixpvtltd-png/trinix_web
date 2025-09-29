import db from '../models/db.js';
import { jobSchema } from '../utils/validators.js';

export function listJobs(req, res) {
  const rows = db.prepare('SELECT * FROM jobs WHERE is_active = 1 ORDER BY id DESC').all();
  res.json(rows);
}

export function getJob(req, res) {
  const id = Number(req.params.id);
  const row = db.prepare('SELECT * FROM jobs WHERE id = ?').get(id);
  if (!row) return res.status(404).json({ message: 'Not found' });
  res.json(row);
}

export function createJob(req, res) {
  const { error, value } = jobSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { title, location, type, description, is_active } = value;
  const isActiveInt = typeof is_active === 'boolean' ? (is_active ? 1 : 0) : 1;
  const info = db.prepare('INSERT INTO jobs (title, location, type, description, is_active, created_by) VALUES (?, ?, ?, ?, ?, ?)')
    .run(title, location, type, description, isActiveInt, req.user?.id ?? null);
  const created = db.prepare('SELECT * FROM jobs WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json(created);
}

export function updateJob(req, res) {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT * FROM jobs WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ message: 'Not found' });
  const { error, value } = jobSchema.validate(req.body, { allowUnknown: false });
  if (error) return res.status(400).json({ message: error.message });
  const { title, location, type, description, is_active } = value;
  const isActiveInt = typeof is_active === 'boolean' ? (is_active ? 1 : 0) : existing.is_active;
  db.prepare('UPDATE jobs SET title=?, location=?, type=?, description=?, is_active=? WHERE id=?')
    .run(title, location, type, description, isActiveInt, id);
  const updated = db.prepare('SELECT * FROM jobs WHERE id = ?').get(id);
  res.json(updated);
}

export function deleteJob(req, res) {
  const id = Number(req.params.id);
  const info = db.prepare('DELETE FROM jobs WHERE id = ?').run(id);
  if (info.changes === 0) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
}

