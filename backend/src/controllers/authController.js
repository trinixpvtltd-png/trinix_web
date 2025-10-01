import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginSchema, registerSchema } from '../utils/validators.js';

export function register(req, res) {
  const { error, value } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { email, password, role } = value;
  User.findOne({ email }).then((existing) => {
    if (existing) return res.status(409).json({ message: 'Email already in use' });
    const passwordHash = bcrypt.hashSync(password, 10);
    return User.create({ email, password_hash: passwordHash, role });
  }).then((doc) => {
    if (!doc) return; // response already sent
    return res.status(201).json({ id: doc._id, email: doc.email, role: doc.role });
  }).catch((err) => res.status(500).json({ message: err.message }));
}

export function login(req, res) {
  const { error, value } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  const { email, password } = value;
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const ok = bcrypt.compareSync(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
  }).catch((err) => res.status(500).json({ message: err.message }));
}

