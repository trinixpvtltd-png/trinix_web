import db from '../models/db.js';
import { researchSchema } from '../utils/validators.js';

export function listResearches(req, res) {
  const rows = db.prepare('SELECT * FROM researches ORDER BY id DESC').all();
  res.json(rows);
}

export function getResearch(req, res) {
  const id = Number(req.params.id);
  const row = db.prepare('SELECT * FROM researches WHERE id = ?').get(id);
  if (!row) return res.status(404).json({ message: 'Not found' });
  res.json(row);
}

export function createResearch(req, res) {
  const { error, value } = researchSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { title, abstract, document_url, published_at } = value;
  const info = db.prepare('INSERT INTO researches (title, abstract, document_url, published_at, created_by) VALUES (?, ?, ?, ?, ?)')
    .run(title, abstract, document_url, published_at, req.user?.id ?? null);
  const created = db.prepare('SELECT * FROM researches WHERE id = ?').get(info.lastInsertRowid);
  res.status(201).json(created);
}

export function updateResearch(req, res) {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT * FROM researches WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ message: 'Not found' });
  const { error, value } = researchSchema.validate(req.body, { allowUnknown: false });
  if (error) return res.status(400).json({ message: error.message });
  const { title, abstract, document_url, published_at } = value;
  db.prepare('UPDATE researches SET title=?, abstract=?, document_url=?, published_at=? WHERE id=?')
    .run(title, abstract, document_url, published_at, id);
  const updated = db.prepare('SELECT * FROM researches WHERE id = ?').get(id);
  res.json(updated);
}

export function deleteResearch(req, res) {
  const id = Number(req.params.id);
  const info = db.prepare('DELETE FROM researches WHERE id = ?').run(id);
  if (info.changes === 0) return res.status(404).json({ message: 'Not found' });
  res.status(204).send();
}

