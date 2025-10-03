import User from '../models/User_modal.js';

// GET /api/admin/users
// Requires: authenticateToken + requireAdmin
// Optional query params: q (search by name/email), page, limit
export const getAllUsers = async (req, res) => {
  try {
    const { q, page = 1, limit = 25 } = req.query;
    const numericLimit = Math.min(Math.max(parseInt(limit, 10) || 25, 1), 100);
    const skip = (Math.max(parseInt(page, 10) || 1, 1) - 1) * numericLimit;

    const filter = {};
    if (q && String(q).trim()) {
      const regex = new RegExp(String(q).trim(), 'i');
      filter.$or = [
        { first_name: regex },
        { last_name: regex },
        { email: regex },
        { company: regex }
      ];
    }

    const [users, total] = await Promise.all([
      User.find(filter)
        .select('first_name last_name email company role verified created_at last_login')
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(numericLimit),
      User.countDocuments(filter)
    ]);

    return res.json({
      success: true,
      total,
      page: Math.max(parseInt(page, 10) || 1, 1),
      limit: numericLimit,
      users
    });
  } catch (err) {
    console.error('Admin getAllUsers error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch users' });
  }
};

export default { getAllUsers };


