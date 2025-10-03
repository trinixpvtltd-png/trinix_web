import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User_modal.js';
import ProjectIdea from '../models/Project_Idea_modal.js';
import { registerSchema, loginSchema, ideaSubmissionSchema } from '../utils/validators.js';

// POST /api/users/signup (or mount where appropriate)
// Body schema: registerSchema (first_name, last_name, email, password, confirm_password, phone, company, role)
export const signup = async (req, res) => {
	try {
		// 1) Validate request body against Joi schema
		const { error, value } = registerSchema.validate(req.body);
		if (error) {
			return res.status(400).json({
				success: false,
				message: error.message,
				errors: error.details
			});
		}

		const {
			first_name,
			last_name,
			email,
			password,
			phone,
			company,
			role
		} = value;

		// 2) Ensure user does not already exist (by email or phone)
		const existing = await User.findOne({
			$or: [
				{ email: email.toLowerCase() },
				{ phone: phone }
			]
		});
		if (existing) {
			return res.status(409).json({
				success: false,
				message: existing.email === email.toLowerCase()
					? 'Email already registered'
					: 'Phone number already registered'
			});
		}

		// 3) Hash password
		const salt = await bcrypt.genSalt(12);
		const password_hash = await bcrypt.hash(password, salt);

		// 4) Create user
		const user = await User.create({
			first_name,
			last_name,
			email: email.toLowerCase(),
			password_hash,
			phone,
			company,
			role: role || 'user',
			verified: false,
			created_at: new Date(),
			last_login: new Date()
		});

		// 5) Issue JWT
		const token = jwt.sign(
			{
				id: user._id,
				email: user.email,
				role: user.role
			},
			process.env.JWT_SECRET,
			{ expiresIn: '7d' }
		);

		// 6) Shape response payload (no sensitive fields)
		const userPayload = {
			id: user._id,
			email: user.email,
			first_name: user.first_name,
			last_name: user.last_name,
			role: user.role,
			phone: user.phone,
			company: user.company,
			verified: user.verified,
			created_at: user.created_at
		};

		return res.status(201).json({
			success: true,
			message: 'Registration successful',
			data: {
				user: userPayload,
				token
			}
		});
	} catch (err) {
		console.error('Signup error:', err);
		return res.status(500).json({
			success: false,
			message: 'An error occurred during signup',
			error: process.env.NODE_ENV === 'development' ? err.message : undefined
		});
	}
};

export const login = async (req, res) => {
		try {
			const { error, value } = loginSchema.validate(req.body);
			if (error) {
				return res.status(400).json({ success: false, message: error.message });
			}

			const { email, password } = value;
			const user = await User.findOne({ email: email.toLowerCase() });
			if (!user) {
				return res.status(401).json({ success: false, message: 'Invalid credentials' });
			}

			const isValid = await bcrypt.compare(password, user.password_hash);
			if (!isValid) {
				return res.status(401).json({ success: false, message: 'Invalid credentials' });
			}

			user.last_login = new Date();
			await user.save();

			const token = jwt.sign(
				{ id: user._id, email: user.email, role: user.role },
				process.env.JWT_SECRET,
				{ expiresIn: '7d' }
			);

			const userPayload = {
				id: user._id,
				email: user.email,
				first_name: user.first_name,
				last_name: user.last_name,
				role: user.role,
				company: user.company,
				phone: user.phone,
				verified: user.verified
			};

			return res.json({ success: true, token, user: userPayload });
		} catch (err) {
			console.error('Login error:', err);
			return res.status(500).json({ success: false, message: 'An error occurred during login' });
		}
};

// Stateless JWT logout: frontend should discard the token. This endpoint exists
// for symmetry and to allow any server-side hooks/logging if needed.
export const logout = async (req, res) => {
	try {
		// If desired later: record a logout timestamp or manage a token denylist.
		return res.json({ success: true, message: 'Logged out' });
	} catch (err) {
		console.error('Logout error:', err);
		return res.status(500).json({ success: false, message: 'An error occurred during logout' });
	}
};


// User dashboard details: user profile + idea stats
export const getUserDashboard = async (req, res) => {
	try {
		const userId = req.user?.id;
		if (!userId) return res.status(401).json({ message: 'Unauthorized' });

		const [user, ideas] = await Promise.all([
			User.findById(userId).select('first_name last_name email company created_at last_login role verified'),
			ProjectIdea.find({ user_id: userId }).sort({ created_at: -1 })
		]);

		if (!user) return res.status(404).json({ message: 'User not found' });

		const totalIdeas = ideas.length;
		const publishedIdeas = ideas.filter(i => i.status === 'Published').length;
		const pendingIdeas = ideas.filter(i => i.status === 'Prelisted').length;

		const profile = {
			id: user._id,
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			company: user.company || 'NA',
			verified: user.verified,
			created_at: user.created_at,
			last_login: user.last_login
		};

		// return a few most recent ideas for quick overview
		const recentIdeas = ideas.slice(0, 5).map(i => ({
			id: i._id,
			title: i.title,
			type: i.type,
			category: i.category,
			status: i.status,
			priority: i.priority,
			created_at: i.created_at
		}));

		return res.json({
			success: true,
			user: profile,
			stats: { totalIdeas, publishedIdeas, pendingIdeas },
			recentIdeas
		});
	} catch (e) {
		console.error('getUserDashboard error:', e);
		return res.status(500).json({ message: 'Failed to load dashboard' });
	}
};


//post project idea 
export const postProjectIdea = async (req, res) => {
	try {
		const userId = req.user?.id;
		if (!userId) return res.status(401).json({ message: 'Unauthorized' });

		// Validate body against idea submission schema
		const { error, value } = ideaSubmissionSchema.validate(req.body);
		if (error) {
			return res.status(400).json({ message: error.message, errors: error.details });
		}

		const { type, title, description, category, tags, priority, expected_outcome, resources, status } = value;

		const idea = new ProjectIdea({
			user_id: userId,
			type,
			title,
			description,
			category,
			tags: Array.isArray(tags)
				? tags
				: (typeof tags === 'string' ? tags.split(',').map(t => t.trim()).filter(Boolean) : []),
			priority: priority || 'medium',
			expected_outcome,
			resources,
			status: status || 'Prelisted'
		});

		await idea.save();
		await idea.populate('user_id', 'first_name last_name email');

		return res.status(201).json({ success: true, message: 'Idea submitted successfully', idea });
	} catch (err) {
		console.error('Submit idea error:', err);
		return res.status(500).json({ message: 'An error occurred while submitting the idea' });
	}
};

// Get all project/research ideas (public)
export const getAllProjectIdeas = async (_req, res) => {
	try {
		const ideas = await ProjectIdea.find()
			.sort({ created_at: -1 })
			.populate('user_id', 'first_name last_name email');
		return res.json({ success: true, count: ideas.length, ideas });
	} catch (err) {
		console.error('Get all ideas error:', err);
		return res.status(500).json({ success: false, message: 'Failed to fetch ideas' });
	}
};

// Get project/research ideas created by the authenticated user
export const getMyProjectIdeas = async (req, res) => {
	try {
		const userId = req.user?.id;
		if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });

		const ideas = await ProjectIdea.find({ user_id: userId })
			.sort({ created_at: -1 })
			.populate('user_id', 'first_name last_name email');
		return res.json({ success: true, count: ideas.length, ideas });
	} catch (err) {
		console.error('Get my ideas error:', err);
		return res.status(500).json({ success: false, message: 'Failed to fetch user ideas' });
	}
};

//job post