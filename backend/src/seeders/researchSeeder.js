import Research from '../models/Research.js';
import User from '../models/User.js';
import mongoose from '../models/db.js';

const sampleResearchData = [
  {
    title: 'Enhancing Natural Language Processing with Transformer-Based Architectures in Enterprise Applications',
    authors: 'Sarah Johnson, Michael Chen, David Kim',
    abstract: 'This paper explores the implementation of advanced transformer architectures in enterprise-level natural language processing applications, demonstrating significant improvements in accuracy and efficiency across multiple domains including customer service automation, document analysis, and real-time language translation.',
    category: 'ai',
    category_label: 'AI & Machine Learning',
    published_at: new Date('2024-09-15'),
    downloads: 1247,
    tags: ['AI', 'NLP', 'Transformers', 'Enterprise']
  },
  {
    title: 'Zero-Trust Architecture Implementation: A Comprehensive Framework for Modern Enterprise Security',
    authors: 'Robert Chang, Emily Rodriguez',
    abstract: 'A detailed analysis of zero-trust security implementation strategies, including practical frameworks and case studies from enterprise deployments. This research provides actionable insights for organizations looking to implement comprehensive security models.',
    category: 'security',
    category_label: 'Cybersecurity',
    published_at: new Date('2024-08-20'),
    downloads: 892,
    tags: ['Security', 'Zero-Trust', 'Enterprise', 'Framework']
  },
  {
    title: 'Serverless Computing Optimization: Performance Analysis and Cost-Effective Scaling Strategies',
    authors: 'Michael Chen, Lisa Thompson',
    abstract: 'This research presents comprehensive optimization techniques for serverless computing environments, focusing on performance metrics and cost reduction strategies. The study includes real-world case studies and benchmarking results.',
    category: 'cloud',
    category_label: 'Cloud Computing',
    published_at: new Date('2024-07-10'),
    downloads: 1156,
    tags: ['Cloud', 'Serverless', 'Optimization', 'Performance']
  },
  {
    title: 'Real-Time Data Processing at Scale: Advanced Techniques for High-Velocity Data Streams',
    authors: 'Sophie Williams, David Kim, James Wilson',
    abstract: 'An in-depth exploration of real-time data processing methodologies, presenting novel approaches to handle high-velocity data streams with minimal latency. The paper includes performance comparisons and implementation guidelines.',
    category: 'data',
    category_label: 'Data Analytics',
    published_at: new Date('2024-06-25'),
    downloads: 743,
    tags: ['Data Processing', 'Real-time', 'Analytics', 'Streaming']
  },
  {
    title: 'Modern Frontend Architecture: Component-Based Design Patterns for Scalable Web Applications',
    authors: 'James Wilson, Emily Rodriguez',
    abstract: 'This paper examines contemporary frontend architecture patterns, providing guidelines for building maintainable and scalable web applications. It covers state management, component design, and performance optimization strategies.',
    category: 'web',
    category_label: 'Web Development',
    published_at: new Date('2024-05-30'),
    downloads: 1389,
    tags: ['Frontend', 'Architecture', 'React', 'Scalability']
  },
  {
    title: 'Cross-Platform Mobile Development: Performance Optimization and User Experience Enhancement',
    authors: 'Lisa Thompson, David Kim',
    abstract: 'A comprehensive study of cross-platform mobile development frameworks, focusing on performance optimization techniques and UX best practices. The research includes comparative analysis of different frameworks and their trade-offs.',
    category: 'ai',
    category_label: 'AI & Machine Learning',
    published_at: new Date('2024-04-15'),
    downloads: 967,
    tags: ['Mobile', 'Cross-platform', 'Performance', 'UX']
  }
];

export async function seedResearchData() {
  try {
    console.log('🌱 Seeding research data...');
    
    // Check if research data already exists
    const existingResearch = await Research.countDocuments();
    if (existingResearch > 0) {
      console.log('✅ Research data already exists, skipping seeding.');
      return;
    }

    // Find or create a default user to associate with research
    // Use an OR lookup (email or phone) so we don't attempt to create a user
    // that would violate the unique phone or email constraint if one already exists
    const defaultEmail = 'admin@trinix.com';
    const defaultPhone = '1234567890';
    let defaultUser = await User.findOne({ $or: [{ email: defaultEmail }, { phone: defaultPhone }] });
    if (!defaultUser) {
      // Create a default admin user if none exists
      const bcrypt = await import('bcryptjs');
      const hashedPassword = await bcrypt.hash('admin123', 12);

      defaultUser = await User.create({
        email: defaultEmail,
        password_hash: hashedPassword,
        first_name: 'Admin',
        last_name: 'User',
        role: 'admin',
        phone: defaultPhone,
        company: 'Trinix Technologies',
        verified: true,
        created_at: new Date(),
        last_login: new Date()
      });

      console.log('✅ Created default admin user');
    } else {
      console.log('✅ Default admin user already exists (matched by email or phone)');
    }

    // Create research documents
    const researchDocs = sampleResearchData.map(research => ({
      ...research,
      created_by: defaultUser._id,
      created_at: new Date(),
      updated_at: new Date()
    }));

    await Research.insertMany(researchDocs);
    
    console.log(`✅ Successfully seeded ${researchDocs.length} research papers`);
    console.log('🔬 Research data seeding completed!');
    
  } catch (error) {
    console.error('❌ Error seeding research data:', error);
    throw error;
  }
}

// Run seeder if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedResearchData()
    .then(() => {
      console.log('✅ Seeding completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}

