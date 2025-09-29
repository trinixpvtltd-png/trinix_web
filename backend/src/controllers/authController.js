import db from '../models/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginSchema, registerSchema } from '../utils/validators.js';

export function register(req, res) {
  const { error, value } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { email, password, role } = value;

  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) return res.status(409).json({ message: 'Email already in use' });

  const passwordHash = bcrypt.hashSync(password, 10);
  const info = db.prepare('INSERT INTO users (email, password_hash, role) VALUES (?, ?, ?)')
    .run(email, passwordHash, role);

  return res.status(201).json({ id: info.lastInsertRowid, email, role });
}

export function login(req, res) {
  const { error, value } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { email, password } = value;

  const user = db.prepare('SELECT id, email, password_hash, role FROM users WHERE email = ?').get(email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const ok = bcrypt.compareSync(password, user.password_hash);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
  return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
}

