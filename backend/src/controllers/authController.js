import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginSchema, registerSchema } from '../utils/validators.js';

export async function register(req, res) {
  try {
    // Validate request body
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
        errors: error.details
      });
    }

    const { 
      email, 
      password, 
      first_name, 
      last_name, 
      phone, 
      company,
      role 
    } = value;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [
        { email: email.toLowerCase() },
        { phone: phone }
      ]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: existingUser.email === email.toLowerCase() ? 
          'Email already registered' : 
          'Phone number already registered'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await User.create({
      email: email.toLowerCase(),
      password_hash: passwordHash,
      first_name,
      last_name,
      phone,
      company,
      role: role || 'user',
      verified: false,
      created_at: new Date(),
      last_login: new Date()
    });

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: newUser._id, 
        email: newUser.email, 
        role: newUser.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Remove password hash from response
    const userResponse = {
      id: newUser._id,
      email: newUser.email,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      role: newUser.role,
      phone: newUser.phone,
      company: newUser.company,
      verified: newUser.verified,
      created_at: newUser.created_at
    };

    // Send welcome email (you can implement this later)
    // await sendWelcomeEmail(newUser.email, newUser.name);

    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: {
        user: userResponse,
        token
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred during registration',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
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

