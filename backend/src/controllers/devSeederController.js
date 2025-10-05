import bcrypt from 'bcryptjs';
import User from '../models/User_modal.js';
import ProjectIdea from '../models/Project_Idea_modal.js';

// Dev-only: create sample users and ideas for frontend testing
export const seedTestData = async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ success: false, message: 'Seeding not allowed in production' });
  }

  try {
    // Create sample users if they don't exist
    const usersToEnsure = [
      { email: 'alice@example.com', phone: '1111111111', first_name: 'Alice', last_name: 'Walker', company: 'Acme', role: 'user' },
      { email: 'bob@example.com', phone: '2222222222', first_name: 'Bob', last_name: 'Stone', company: 'Acme', role: 'user' },
      { email: 'admin@trinix.com', phone: '1234567890', first_name: 'Admin', last_name: 'User', company: 'Trinix', role: 'admin' }
    ];

    const createdUsers = [];
    for (const u of usersToEnsure) {
      let existing = await User.findOne({ $or: [{ email: u.email }, { phone: u.phone }] });
      if (!existing) {
        const password_hash = await bcrypt.hash('password123', 10);
        existing = await User.create({
          first_name: u.first_name,
          last_name: u.last_name,
          email: u.email,
          phone: u.phone,
          company: u.company || 'NA',
          role: u.role || 'user',
          password_hash,
          verified: true,
          created_at: new Date(),
          last_login: new Date()
        });
      }
      createdUsers.push(existing);
    }

    // Create sample ideas for first two users
    const ideasToCreate = [
      {
        user: createdUsers[0],
        title: 'AI in Healthcare Automation',
        description: 'Research on implementing AI-driven automation in healthcare workflows to improve patient care efficiency.',
        type: 'research',
        category: 'Healthcare',
        status: 'Published'
      },
      {
        user: createdUsers[1],
        title: 'Smart City Traffic Management',
        description: 'IoT-based traffic management system using real-time data analytics to optimize traffic flow.',
        type: 'project',
        category: 'Smart Cities',
        status: 'Prelisted'
      }
    ];

    const createdIdeas = [];
    for (const it of ideasToCreate) {
      // avoid duplicates by title
      let existingIdea = await ProjectIdea.findOne({ title: it.title });
      if (!existingIdea) {
        existingIdea = await ProjectIdea.create({
          user_id: it.user._id,
          created_by: it.user._id,
          title: it.title,
          description: it.description,
          type: it.type,
          category: it.category,
          status: it.status,
          created_at: new Date()
        });
      }
      createdIdeas.push(existingIdea);
    }

    return res.json({ success: true, users: createdUsers.length, ideas: createdIdeas.length });
  } catch (err) {
    console.error('Dev seeder error:', err);
    return res.status(500).json({ success: false, message: 'Failed to seed test data', error: err.message });
  }
};

export default { seedTestData };
