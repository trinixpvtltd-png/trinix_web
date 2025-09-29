import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trinixVideo from './video.mp4';


const HomePage = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: true
                    }));
                }
            });
        }, observerOptions);

        setTimeout(() => {
            const elements = document.querySelectorAll('[data-animate]');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, []);

    const styles = {
        pageContainer: {
            fontFamily: "'Inter', system-ui, sans-serif",
            lineHeight: 1.6,
            color: '#334155'
        },

        // Hero Section with Clerk's exact background styling
        heroSection: {
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 20%, #f1f5f9 100%)',
            padding: '160px 0 120px',
            marginTop: '64px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '80vh'
        },
        heroContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
        },
        heroTitle: {
            fontSize: window.innerWidth <= 768 ? '3.5rem' : '4.8rem',
            fontWeight: '800',
            marginBottom: '32px',
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
            color: '#1e293b'
        },
        heroHighlight: {
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        heroSubtitle: {
            fontSize: '1.25rem',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto 48px',
            color: '#64748b',
            fontWeight: '400'
        },
        heroButtons: {
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '80px'
        },
        primaryButton: {
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)'
        },
        secondaryButton: {
            background: 'white',
            color: '#475569',
            padding: '16px 32px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)'
        },

        // Floating geometric elements like Clerk
        decorativeShape1: {
            position: 'absolute',
            top: '15%',
            left: '8%',
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08))',
            borderRadius: '28px',
            transform: 'rotate(12deg)',
            zIndex: 1,
            animation: 'float1 8s ease-in-out infinite'
        },
        decorativeShape2: {
            position: 'absolute',
            top: '25%',
            right: '12%',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(147, 51, 234, 0.12))',
            borderRadius: '50%',
            zIndex: 1,
            animation: 'float2 6s ease-in-out infinite'
        },
        decorativeShape3: {
            position: 'absolute',
            bottom: '20%',
            left: '15%',
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))',
            borderRadius: '20px',
            transform: 'rotate(-15deg)',
            zIndex: 1,
            animation: 'float3 7s ease-in-out infinite'
        },
        decorativeShape4: {
            position: 'absolute',
            bottom: '30%',
            right: '8%',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.06), rgba(59, 130, 246, 0.06))',
            borderRadius: '24px',
            transform: 'rotate(25deg)',
            zIndex: 1,
            animation: 'float4 9s ease-in-out infinite'
        },
        decorativeShape5: {
            position: 'absolute',
            top: '40%',
            left: '5%',
            width: '60px',
            height: '60px',
            background: 'rgba(99, 102, 241, 0.15)',
            borderRadius: '50%',
            zIndex: 1,
            animation: 'float5 5s ease-in-out infinite'
        },
        decorativeShape6: {
            position: 'absolute',
            top: '35%',
            right: '5%',
            width: '90px',
            height: '90px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.08))',
            borderRadius: '18px',
            transform: 'rotate(-8deg)',
            zIndex: 1,
            animation: 'float6 6.5s ease-in-out infinite'
        },
        decorativeShape7: {
            position: 'absolute',
            top: '60%',
            left: '25%',
            width: '40px',
            height: '40px',
            background: 'rgba(59, 130, 246, 0.2)',
            borderRadius: '8px',
            transform: 'rotate(45deg)',
            zIndex: 1,
            animation: 'float7 4s ease-in-out infinite'
        },
        decorativeShape8: {
            position: 'absolute',
            bottom: '50%',
            right: '25%',
            width: '50px',
            height: '50px',
            background: 'rgba(168, 85, 247, 0.18)',
            borderRadius: '50%',
            zIndex: 1,
            animation: 'float8 5.5s ease-in-out infinite'
        },

        // 3D Cube styles
        cube: {
            position: 'absolute',
            width: '60px',
            height: '60px',
            transformStyle: 'preserve-3d',
            zIndex: 1
        },
        cubeFace: {
            position: 'absolute',
            width: '60px',
            height: '60px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            backdropFilter: 'blur(5px)'
        },

        // Subtle overlay
        heroOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
      `,
            zIndex: 2
        },

        // Common Section Styles
        section: {
            padding: '120px 0',
            borderBottom: '1px solid #f1f5f9'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
        },
        sectionTitle: {
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1e293b',
            textAlign: 'center',
            marginBottom: '16px',
            letterSpacing: '-0.025em'
        },
        sectionSubtitle: {
            fontSize: '1.125rem',
            color: '#64748b',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 80px',
            lineHeight: '1.6'
        },
        cardGrid: {
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
            gap: '32px',
            marginBottom: '80px'
        },
        card: {
            background: 'white',
            borderRadius: '20px',
            padding: '40px 32px',
            border: '1px solid #f1f5f9',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
            height: 'fit-content'
        },
        cardIcon: {
            fontSize: '2.5rem',
            marginBottom: '24px',
            display: 'block'
        },
        cardTitle: {
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '12px',
            lineHeight: '1.4'
        },
        cardDescription: {
            color: '#64748b',
            lineHeight: '1.6',
            fontSize: '0.9375rem',
            marginBottom: '20px'
        },
        featuresList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        featureItem: {
            color: '#64748b',
            fontSize: '0.875rem',
            marginBottom: '8px',
            paddingLeft: '16px',
            position: 'relative'
        },
        exploreButton: {
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)'
        },
        centerButton: {
            textAlign: 'center'
        },

        // Story section
        storySection: {
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            padding: '120px 0',
            borderBottom: '1px solid #f1f5f9'
        },
        storyContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
        },
        videoContainer: {
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0',
            transition: 'transform 0.3s ease'
        },
        storyVideo: {
            width: '100%',
            height: '400px',
            objectFit: 'cover'
        },

        // Stats section
        statsSection: {
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            padding: '100px 0',
            borderBottom: '1px solid #f1f5f9'
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
        },
        statCard: {
            background: 'white',
            padding: '40px 24px',
            borderRadius: '20px',
            textAlign: 'center',
            border: '1px solid #f1f5f9',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.04)'
        },
        statNumber: {
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'block',
            marginBottom: '8px',
            lineHeight: '1'
        },
        statLabel: {
            fontSize: '0.875rem',
            color: '#64748b',
            fontWeight: '500'
        },

        // Footer styles
        footer: {
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            color: '#e2e8f0',
            padding: '100px 0 0',
            borderTop: '1px solid rgba(99, 102, 241, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            margin: '0',
            boxSizing: 'border-box'
        },
        footerOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
                radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
            `,
            zIndex: 1
        },
        footerContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px',
            position: 'relative',
            zIndex: 2,
            width: '100%',
            boxSizing: 'border-box'
        },
        footerGrid: {
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(4, 1fr)',
            gap: '60px',
            marginBottom: '80px'
        },
        footerSection: {
            display: 'flex',
            flexDirection: 'column'
        },
        footerTitle: {
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '24px',
            position: 'relative',
            paddingBottom: '12px'
        },
        footerTitleAccent: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '3px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            borderRadius: '2px'
        },
        footerLink: {
            color: '#cbd5e1',
            textDecoration: 'none',
            marginBottom: '16px',
            fontSize: '0.9375rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            paddingLeft: '0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        footerLinkIcon: {
            fontSize: '0.75rem',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            color: '#6366f1'
        },
        footerBottom: {
            background: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '40px 0',
            margin: '0',
            width: '100%',
            boxSizing: 'border-box'
        },
        footerBottomContent: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
        },
        footerLogo: {
            fontSize: '1.75rem',
            fontWeight: '800',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
        },
        footerLogoIcon: {
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'white',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)'
        },
        footerBottomLinks: {
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'center'
        },
        footerBottomLink: {
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.9375rem',
            transition: 'color 0.3s ease',
            fontWeight: '500'
        },
        copyrightText: {
            color: '#64748b',
            fontSize: '0.9375rem',
            fontWeight: '500'
        },
        companyDescription: {
            color: '#94a3b8',
            marginBottom: '32px',
            lineHeight: '1.7',
            fontSize: '1rem'
        },
        contactInfo: {
            color: '#cbd5e1',
            marginBottom: '12px',
            fontSize: '0.9375rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 0'
        },
        contactIcon: {
            fontSize: '1rem',
            color: '#6366f1'
        }
    };

    // Add CSS animations for floating elements and cubes
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      
      * {
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Inter', system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
      }
      
      @keyframes float1 {
        0%, 100% {
          transform: rotate(12deg) translateY(0px);
        }
        50% {
          transform: rotate(12deg) translateY(-15px);
        }
      }
      
      @keyframes float2 {
        0%, 100% {
          transform: translateY(0px) scale(1);
        }
        50% {
          transform: translateY(-12px) scale(1.05);
        }
      }
      
      @keyframes float3 {
        0%, 100% {
          transform: rotate(-15deg) translateY(0px);
        }
        50% {
          transform: rotate(-15deg) translateY(-10px);
        }
      }
      
      @keyframes float4 {
        0%, 100% {
          transform: rotate(25deg) translateY(0px);
        }
        50% {
          transform: rotate(25deg) translateY(-18px);
        }
      }
      
      @keyframes float5 {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-8px);
        }
      }
      
      @keyframes float6 {
        0%, 100% {
          transform: rotate(-8deg) translateY(0px);
        }
        50% {
          transform: rotate(-8deg) translateY(-14px);
        }
      }
      
      @keyframes float7 {
        0%, 100% {
          transform: rotate(45deg) translateY(0px);
        }
        50% {
          transform: rotate(45deg) translateY(-6px);
        }
      }
      
      @keyframes float8 {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-11px);
        }
      }
      
      @keyframes rotateCube {
        0% {
          transform: rotateX(0deg) rotateY(0deg);
        }
        100% {
          transform: rotateX(360deg) rotateY(360deg);
        }
      }
      
      @keyframes moveCube1 {
        0%, 100% {
          top: 20%;
          left: 10%;
        }
        50% {
          top: 25%;
          left: 15%;
        }
      }
      
      @keyframes moveCube2 {
        0%, 100% {
          top: 50%;
          right: 10%;
        }
        50% {
          top: 45%;
          right: 15%;
        }
      }
      
      @keyframes moveCube3 {
        0%, 100% {
          bottom: 25%;
          left: 20%;
        }
        50% {
          bottom: 30%;
          left: 25%;
        }
      }
      
      @keyframes moveCube4 {
        0%, 100% {
          top: 35%;
          left: 50%;
        }
        50% {
          top: 40%;
          left: 55%;
        }
      }
      
      @keyframes moveCube5 {
        0%, 100% {
          bottom: 35%;
          right: 20%;
        }
        50% {
          bottom: 30%;
          right: 25%;
        }
      }
      
      [data-animate] {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      
      [data-animate].visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
        document.head.appendChild(style);
    }, []);

    // Complete data for all sections
    const industries = [
        {
            icon: '🏢',
            title: 'Enterprise Corporations',
            desc: 'Large-scale businesses seeking digital transformation and operational efficiency through cutting-edge technology solutions.',
            features: ['ERP System Integration', 'Digital Workflow Automation', 'Data Analytics & BI', 'Cloud Migration Services', 'Security & Compliance']
        },
        {
            icon: '🏪',
            title: 'Small & Medium Businesses',
            desc: 'Growing companies looking to scale their operations with cost-effective and scalable technology infrastructure.',
            features: ['Website Development', 'E-commerce Solutions', 'CRM Implementation', 'Digital Marketing Tools', 'Basic Cloud Setup']
        },
        {
            icon: '🏥',
            title: 'Healthcare Organizations',
            desc: 'Medical institutions requiring secure, compliant, and efficient digital health solutions for better patient care.',
            features: ['HIPAA Compliant Systems', 'Electronic Health Records', 'Telemedicine Platforms', 'Patient Portal Development', 'Medical Device Integration']
        }
    ];

    const services = [
        {
            icon: '💻',
            title: 'Web Development',
            desc: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
            features: ['React/Vue.js Development', 'Node.js Backend', 'Database Design', 'API Integration', 'Performance Optimization']
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            desc: 'Native and cross-platform mobile applications that engage users and drive business growth across all platforms.',
            features: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'App Store Optimization']
        },
        {
            icon: '☁️',
            title: 'Cloud Solutions',
            desc: 'Scalable cloud infrastructure and migration services to enhance business agility and reduce operational costs.',
            features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Microservices', 'Containerization', 'Infrastructure as Code']
        }
    ];

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Chief Executive Officer',
            initial: 'SJ',
            bio: 'Visionary leader with 15+ years in technology innovation. Passionate about driving digital transformation across industries and building scalable solutions that impact millions of users globally.',
            expertise: ['Strategic Planning', 'Digital Transformation', 'Business Development', 'Team Leadership']
        },
        {
            name: 'Michael Chen',
            role: 'Chief Technology Officer',
            initial: 'MC',
            bio: 'Technology architect with expertise in cloud computing, AI, and scalable system design. Leads our technical innovation and engineering excellence across multiple development teams.',
            expertise: ['Cloud Architecture', 'AI/ML Systems', 'Scalable Design', 'Technical Leadership']
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Design',
            initial: 'ER',
            bio: 'Creative director specializing in user experience design and brand development. Creates intuitive and beautiful interfaces that users love while maintaining accessibility standards.',
            expertise: ['UX/UI Design', 'Brand Development', 'Design Systems', 'User Research']
        }
    ];

    const blogPosts = [
        {
            category: 'Artificial Intelligence',
            title: 'The Future of AI in Business: Transforming Industries Through Intelligent Automation',
            excerpt: 'Exploring how artificial intelligence is reshaping industries and creating new opportunities for innovation and efficiency in the digital age. From predictive analytics to automated customer service, AI is revolutionizing business operations.',
            icon: '🤖',
            author: 'Sarah Johnson',
            date: 'Sep 25, 2025',
            readTime: '8 min read',
            tags: ['AI', 'Business Strategy', 'Automation']
        },
        {
            category: 'Cloud Computing',
            title: 'Cloud-First Strategy Guide: Building Scalable Infrastructure for Modern Businesses',
            excerpt: 'Understanding the benefits and challenges of adopting a cloud-first approach in today\'s rapidly evolving digital landscape. Best practices for migration, optimization, and cost management.',
            icon: '☁️',
            author: 'Michael Chen',
            date: 'Sep 20, 2025',
            readTime: '6 min read',
            tags: ['Cloud', 'Infrastructure', 'Migration']
        },
        {
            category: 'Cybersecurity',
            title: 'Zero Trust Security Model: Why Traditional Perimeter Defense Is No Longer Enough',
            excerpt: 'Why traditional perimeter-based security models are obsolete and how Zero Trust architecture provides comprehensive protection against modern cyber threats and data breaches.',
            icon: '🔐',
            author: 'Robert Chang',
            date: 'Sep 15, 2025',
            readTime: '10 min read',
            tags: ['Security', 'Zero Trust', 'Enterprise']
        }
    ];

    const researchPapers = [
        {
            category: 'AI & ML',
            title: 'Enhancing Natural Language Processing with Transformer-Based Architectures in Enterprise Applications',
            desc: 'This paper explores the implementation of advanced transformer architectures in enterprise-level natural language processing applications, demonstrating significant improvements in accuracy and efficiency across multiple domains including customer service automation, document analysis, and real-time language translation.',
            authors: 'Sarah Johnson, Michael Chen, David Kim',
            date: 'September 2025',
            downloads: 1247,
            citations: 23,
            keywords: ['NLP', 'Transformers', 'Enterprise AI', 'Language Models']
        },
        {
            category: 'Security',
            title: 'Zero-Trust Architecture Implementation: A Comprehensive Framework for Modern Enterprise Security',
            desc: 'A detailed analysis of zero-trust security implementation strategies, including practical frameworks and case studies from enterprise deployments across multiple industries. This research provides actionable insights for organizations looking to implement comprehensive security models.',
            authors: 'Robert Chang, Emily Rodriguez, James Wilson',
            date: 'August 2025',
            downloads: 892,
            citations: 31,
            keywords: ['Zero Trust', 'Enterprise Security', 'Architecture', 'Implementation']
        },
        {
            category: 'Cloud',
            title: 'Serverless Computing Optimization: Performance Analysis and Cost-Effective Scaling Strategies',
            desc: 'This research presents comprehensive optimization techniques for serverless computing environments, focusing on performance metrics and cost reduction strategies. The study includes real-world case studies and benchmarking results from major cloud providers.',
            authors: 'Michael Chen, Lisa Thompson, David Kim',
            date: 'July 2025',
            downloads: 1156,
            citations: 18,
            keywords: ['Serverless', 'Cloud Computing', 'Performance', 'Cost Optimization']
        }
    ];

    const careerHighlights = [
        {
            title: 'Senior Full Stack Developer',
            type: 'Full-Time',
            location: 'Remote / Silicon Valley',
            salary: '$120k - $180k',
            description: 'Join our engineering team to build scalable web applications and drive technical innovation with cutting-edge technologies.',
            skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
        },
        {
            title: 'Software Engineering Intern',
            type: 'Summer 2025',
            location: 'Hybrid / Silicon Valley',
            salary: '$5k - $8k/month',
            description: 'Work alongside senior engineers to develop features for our core platform. Perfect opportunity to gain real-world experience.',
            skills: ['JavaScript', 'Python', 'Git', 'Problem Solving']
        },
        {
            title: 'UX/UI Designer',
            type: 'Full-Time',
            location: 'Remote / Silicon Valley',
            salary: '$100k - $150k',
            description: 'Create intuitive and beautiful user experiences for our digital products while conducting user research and prototyping solutions.',
            skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping']
        }
    ];

    return (
        <div style={styles.pageContainer}>
            {/* Hero Section with Clerk-Style Background */}
            <section style={styles.heroSection}>
                {/* Background overlay */}
                <div style={styles.heroOverlay}></div>

                {/* Floating geometric decorative elements */}
                <div style={styles.decorativeShape1}></div>
                <div style={styles.decorativeShape2}></div>
                <div style={styles.decorativeShape3}></div>
                <div style={styles.decorativeShape4}></div>
                <div style={styles.decorativeShape5}></div>
                <div style={styles.decorativeShape6}></div>
                <div style={styles.decorativeShape7}></div>
                <div style={styles.decorativeShape8}></div>

                {/* Moving 3D Cubes */}
                <div style={{ ...styles.cube, animation: 'rotateCube 10s infinite linear, moveCube1 8s ease-in-out infinite' }}>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(0deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(90deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(180deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(90deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
                </div>

                <div style={{ ...styles.cube, animation: 'rotateCube 12s infinite linear, moveCube2 9s ease-in-out infinite' }}>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(0deg) translateZ(30px)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(90deg) translateZ(30px)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(180deg) translateZ(30px)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(-90deg) translateZ(30px)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(90deg) translateZ(30px)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(-90deg) translateZ(30px)', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                </div>

                <div style={{ ...styles.cube, animation: 'rotateCube 15s infinite linear, moveCube3 10s ease-in-out infinite' }}>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(0deg) translateZ(30px)', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(90deg) translateZ(30px)', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(180deg) translateZ(30px)', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(-90deg) translateZ(30px)', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(90deg) translateZ(30px)', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(-90deg) translateZ(30px)', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                </div>

                <div style={{ ...styles.cube, width: '50px', height: '50px', animation: 'rotateCube 11s infinite linear, moveCube4 7s ease-in-out infinite' }}>
                    <div style={{ ...styles.cubeFace, width: '50px', height: '50px', transform: 'rotateY(0deg) translateZ(25px)', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, width: '50px', height: '50px', transform: 'rotateY(90deg) translateZ(25px)', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, width: '50px', height: '50px', transform: 'rotateY(180deg) translateZ(25px)', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, width: '50px', height: '50px', transform: 'rotateY(-90deg) translateZ(25px)', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, width: '50px', height: '50px', transform: 'rotateX(90deg) translateZ(25px)', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}></div>
                    <div style={{ ...styles.cubeFace, width: '50px', height: '50px', transform: 'rotateX(-90deg) translateZ(25px)', background: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}></div>
                </div>

                <div style={{ ...styles.cube, animation: 'rotateCube 13s infinite linear, moveCube5 11s ease-in-out infinite' }}>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(0deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(90deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(180deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateY(-90deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(90deg) translateZ(30px)' }}></div>
                    <div style={{ ...styles.cubeFace, transform: 'rotateX(-90deg) translateZ(30px)' }}></div>
                </div>

                <div style={styles.heroContainer}>
                    <h1 style={styles.heroTitle}>
                        More than development, <br />
                        <span style={styles.heroHighlight}>Complete Digital Solutions</span>
                    </h1>
                    <p style={styles.heroSubtitle}>
                        Need more than just a website? Trinix gives you full-stack digital transformation
                        and business solutions — so you can launch faster, scale easier, and stay focused on building your business.
                    </p>
                    <div style={styles.heroButtons}>
                        <Link
                            to="/contact"
                            style={styles.primaryButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            Start building for free
                        </Link>
                        <Link
                            to="/about"
                            style={styles.secondaryButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.borderColor = '#6366f1';
                                e.target.style.color = '#6366f1';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.borderColor = '#e2e8f0';
                                e.target.style.color = '#475569';
                            }}
                        >
                            Watch demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Preview with Video */}
            <section style={styles.storySection}>
                <div style={styles.storyContainer}>
                    <div data-animate id="story" className={isVisible.story ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>Our Story</h2>
                        <p style={{ ...styles.sectionSubtitle, textAlign: 'left', margin: '0 0 24px 0' }}>
                            Founded in 2008, Trinix has been at the forefront of digital innovation,
                            creating solutions that bridge the gap between technology and human needs.
                        </p>
                        <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '24px' }}>
                            What started as a small team has grown into a global technology company
                            serving thousands of users across 25+ countries. Our mission is to empower
                            communities through technology, whether it's connecting people during emergencies,
                            streamlining healthcare access, or creating unforgettable events.
                        </p>
                        <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '32px' }}>
                            We believe in building technology that makes a meaningful impact on people's lives,
                            from Fortune 500 companies to local nonprofits. Every project we take on is an
                            opportunity to solve real problems and create lasting value.
                        </p>
                        <Link
                            to="/about"
                            style={styles.exploreButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            Learn Our Story
                        </Link>
                    </div>

                    <div style={styles.videoContainer}>
                        <video style={styles.storyVideo} controls preload="metadata" muted>
                            <source src={trinixVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={styles.statsSection}>
                <div style={styles.statsGrid}>
                    <div
                        style={styles.statCard}
                        data-animate
                        id="stat1"
                        className={isVisible.stat1 ? 'visible' : ''}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                        }}
                    >
                        <span style={styles.statNumber}>17+</span>
                        <span style={styles.statLabel}>Years Experience</span>
                    </div>
                    <div
                        style={styles.statCard}
                        data-animate
                        id="stat2"
                        className={isVisible.stat2 ? 'visible' : ''}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                        }}
                    >
                        <span style={styles.statNumber}>25+</span>
                        <span style={styles.statLabel}>Countries Served</span>
                    </div>
                    <div
                        style={styles.statCard}
                        data-animate
                        id="stat3"
                        className={isVisible.stat3 ? 'visible' : ''}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                        }}
                    >
                        <span style={styles.statNumber}>100K+</span>
                        <span style={styles.statLabel}>Active Users</span>
                    </div>
                    <div
                        style={styles.statCard}
                        data-animate
                        id="stat4"
                        className={isVisible.stat4 ? 'visible' : ''}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                        }}
                    >
                        <span style={styles.statNumber}>500+</span>
                        <span style={styles.statLabel}>Projects Delivered</span>
                    </div>
                </div>
            </section>

            {/* Who We Serve Section with Industry Cards */}
            <section style={{ ...styles.section, background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                <div style={styles.container}>
                    <div data-animate id="industries" className={isVisible.industries ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>Who We Serve</h2>
                        <p style={styles.sectionSubtitle}>
                            Empowering diverse industries with tailored technology solutions that drive growth,
                            innovation, and digital transformation across multiple business sectors and organizational scales.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                data-animate
                                id={`industry-${index}`}
                                className={isVisible[`industry-${index}`] ? 'visible' : ''}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                }}
                            >
                                <span style={styles.cardIcon}>{industry.icon}</span>
                                <h3 style={styles.cardTitle}>{industry.title}</h3>
                                <p style={styles.cardDescription}>{industry.desc}</p>
                                <ul style={styles.featuresList}>
                                    {industry.features.map((feature, idx) => (
                                        <li key={idx} style={styles.featureItem}>
                                            <span style={{
                                                position: 'absolute',
                                                left: '0',
                                                color: '#6366f1',
                                                fontWeight: '600'
                                            }}>•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={styles.centerButton}>
                        <Link
                            to="/who-we-serve"
                            style={styles.exploreButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            See All Industries
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Do Section with Service Cards */}
            <section style={{ ...styles.section, background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)' }}>
                <div style={styles.container}>
                    <div data-animate id="services" className={isVisible.services ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>What We Do</h2>
                        <p style={styles.sectionSubtitle}>
                            Comprehensive technology solutions designed to transform businesses, accelerate digital growth,
                            and create meaningful impact through innovative approaches and cutting-edge technologies.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                data-animate
                                id={`service-${index}`}
                                className={isVisible[`service-${index}`] ? 'visible' : ''}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                }}
                            >
                                <span style={styles.cardIcon}>{service.icon}</span>
                                <h3 style={styles.cardTitle}>{service.title}</h3>
                                <p style={styles.cardDescription}>{service.desc}</p>
                                <ul style={styles.featuresList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} style={styles.featureItem}>
                                            <span style={{
                                                position: 'absolute',
                                                left: '0',
                                                color: '#6366f1',
                                                fontWeight: '600'
                                            }}>•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={styles.centerButton}>
                        <Link
                            to="/what-we-do"
                            style={styles.exploreButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            Explore All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who We Are Section with Team Cards */}
            <section style={{ ...styles.section, background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                <div style={styles.container}>
                    <div data-animate id="team" className={isVisible.team ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>Who We Are</h2>
                        <p style={styles.sectionSubtitle}>
                            Passionate innovators, leaders, and visionaries driving technological change
                            and delivering exceptional results for clients worldwide.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                data-animate
                                id={`member-${index}`}
                                className={isVisible[`member-${index}`] ? 'visible' : ''}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    margin: '0 auto 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    color: 'white',
                                    fontWeight: '600'
                                }}>{member.initial}</div>
                                <h3 style={styles.cardTitle}>{member.name}</h3>
                                <p style={{ color: '#6366f1', marginBottom: '12px', fontWeight: '500', fontSize: '0.9375rem' }}>{member.role}</p>
                                <p style={styles.cardDescription}>{member.bio}</p>
                                <ul style={styles.featuresList}>
                                    {member.expertise.map((skill, idx) => (
                                        <li key={idx} style={styles.featureItem}>
                                            <span style={{
                                                position: 'absolute',
                                                left: '0',
                                                color: '#6366f1',
                                                fontWeight: '600'
                                            }}>•</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Thinking Section with Blog Cards */}
            <section style={{ ...styles.section, background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)' }}>
                <div style={styles.container}>
                    <div data-animate id="thinking" className={isVisible.thinking ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>Our Thinking</h2>
                        <p style={styles.sectionSubtitle}>
                            Insights, perspectives, and thought leadership on technology trends shaping the future
                            of business, innovation, and digital transformation across industries.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                data-animate
                                id={`post-${index}`}
                                className={isVisible[`post-${index}`] ? 'visible' : ''}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                }}
                            >
                                <div style={{
                                    height: '120px',
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'white',
                                    marginBottom: '20px'
                                }}>{post.icon}</div>
                                <span style={{
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    color: '#6366f1',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    marginBottom: '16px',
                                    display: 'inline-block'
                                }}>{post.category}</span>
                                <h3 style={styles.cardTitle}>{post.title}</h3>
                                <p style={styles.cardDescription}>{post.excerpt}</p>
                                <div style={{ marginBottom: '16px' }}>
                                    {post.tags.map((tag, idx) => (
                                        <span key={idx} style={{
                                            background: '#f1f5f9',
                                            color: '#64748b',
                                            padding: '2px 8px',
                                            borderRadius: '6px',
                                            fontSize: '0.75rem',
                                            marginRight: '6px',
                                            marginBottom: '6px',
                                            display: 'inline-block'
                                        }}>#{tag}</span>
                                    ))}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: '16px',
                                    borderTop: '1px solid #f1f5f9',
                                    fontSize: '0.875rem',
                                    color: '#64748b'
                                }}>
                                    <span>{post.author} • {post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={styles.centerButton}>
                        <Link
                            to="/our-thinking"
                            style={styles.exploreButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            Read All Articles
                        </Link>
                    </div>
                </div>
            </section>

            
            {/* Research Section with Paper Cards */}
            <section style={{ ...styles.section, background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                <div style={styles.container}>
                    <div data-animate id="research" className={isVisible.research ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>Research & Publications</h2>
                        <p style={styles.sectionSubtitle}>
                            Cutting-edge research and insights from our team of experts in AI, cybersecurity,
                            cloud computing, and emerging technologies that shape the future.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {researchPapers.map((paper, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                data-animate
                                id={`paper-${index}`}
                                className={isVisible[`paper-${index}`] ? 'visible' : ''}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                }}
                            >
                                <span style={{
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    color: 'white',
                                    padding: '6px 12px',
                                    borderRadius: '12px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    marginBottom: '16px',
                                    display: 'inline-block'
                                }}>{paper.category}</span>
                                <h3 style={styles.cardTitle}>{paper.title}</h3>
                                <p style={{ color: '#6366f1', fontSize: '0.875rem', fontWeight: '500', marginBottom: '12px' }}>By {paper.authors}</p>
                                <p style={styles.cardDescription}>{paper.desc}</p>
                                <div style={{ marginBottom: '16px' }}>
                                    {paper.keywords.map((keyword, idx) => (
                                        <span key={idx} style={{
                                            background: '#f1f5f9',
                                            color: '#64748b',
                                            padding: '2px 8px',
                                            borderRadius: '6px',
                                            fontSize: '0.75rem',
                                            marginRight: '6px',
                                            marginBottom: '6px',
                                            display: 'inline-block'
                                        }}>{keyword}</span>
                                    ))}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: '16px',
                                    borderTop: '1px solid #f1f5f9'
                                }}>
                                    <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                        <div>{paper.date}</div>
                                        <div>{paper.downloads} downloads • {paper.citations} citations</div>
                                    </div>
                                    <button style={{
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        color: 'white',
                                        padding: '6px 12px',
                                        borderRadius: '6px',
                                        border: 'none',
                                        fontSize: '0.75rem',
                                        fontWeight: '500',
                                        cursor: 'pointer'
                                    }}>Download PDF</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={styles.centerButton}>
                        <Link
                            to="/research"
                            style={styles.exploreButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            View All Research
                        </Link>
                    </div>
                </div>
            </section>

            {/* Career Section with Job Cards */}
            <section style={{ ...styles.section, background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)' }}>
                <div style={styles.container}>
                    <div data-animate id="career" className={isVisible.career ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>Join Our Team</h2>
                        <p style={styles.sectionSubtitle}>
                            Build the future of technology with passionate innovators. We offer competitive packages,
                            remote work options, and opportunities for growth at every level.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {careerHighlights.map((job, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                data-animate
                                id={`job-${index}`}
                                className={isVisible[`job-${index}`] ? 'visible' : ''}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <div>
                                        <h3 style={styles.cardTitle}>{job.title}</h3>
                                        <p style={{ color: '#64748b', marginBottom: '8px', fontSize: '0.9375rem' }}>
                                            {job.location} • {job.salary}
                                        </p>
                                    </div>
                                    <span style={{
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '12px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600'
                                    }}>{job.type}</span>
                                </div>
                                <p style={styles.cardDescription}>{job.description}</p>
                                <div style={{ marginBottom: '16px' }}>
                                    <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '8px', color: '#1e293b' }}>Required Skills:</p>
                                    {job.skills.map((skill, idx) => (
                                        <span key={idx} style={{
                                            background: '#f1f5f9',
                                            color: '#64748b',
                                            padding: '4px 8px',
                                            borderRadius: '6px',
                                            fontSize: '0.75rem',
                                            marginRight: '6px',
                                            marginBottom: '6px',
                                            display: 'inline-block'
                                        }}>{skill}</span>
                                    ))}
                                </div>
                                <button style={{
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontSize: '0.9375rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    width: '100%',
                                    transition: 'all 0.2s ease'
                                }}>Apply Now</button>
                            </div>
                        ))}
                    </div>

                    <div style={styles.centerButton}>
                        <Link
                            to="/career"
                            style={styles.exploreButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            View All Positions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects Preview Section */}
            <section style={{ ...styles.section, background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                <div style={styles.container}>
                    <div data-animate id="projects" className={isVisible.projects ? 'visible' : ''}>
                        <h2 style={styles.sectionTitle}>Featured Projects</h2>
                        <p style={styles.sectionSubtitle}>
                            Showcasing our latest innovations and successful implementations across various industries
                            with cutting-edge technology solutions.
                        </p>
                    </div>

                    <div style={styles.cardGrid}>
                        {[
                            { icon: '🎪', title: 'Eventify Platform', desc: 'Comprehensive event management with multi-user roles and real-time analytics.', category: 'Event Management' },
                            { icon: '💼', title: 'Job Application Tracker', desc: 'Full-stack productivity tool for organizing and streamlining job search processes.', category: 'Productivity' },
                            { icon: '🛒', title: 'Smart Retail Dashboard', desc: 'AI-powered e-commerce management with inventory tracking and sales analytics.', category: 'E-commerce' }
                        ].map((project, index) => (
                            <div
                                key={index}
                                style={styles.card}
                                data-animate
                                id={`project-preview-${index}`}
                                className={isVisible[`project-preview-${index}`] ? 'visible' : ''}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px 0 rgba(0, 0, 0, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.04)';
                                    e.currentTarget.style.borderColor = '#f1f5f9';
                                }}
                            >
                                <span style={styles.cardIcon}>{project.icon}</span>
                                <span style={{
                                    background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
                                    color: '#6366f1',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    marginBottom: '16px',
                                    display: 'inline-block'
                                }}>{project.category}</span>
                                <h3 style={styles.cardTitle}>{project.title}</h3>
                                <p style={styles.cardDescription}>{project.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={styles.centerButton}>
                        <Link
                            to="/projects"
                            style={styles.exploreButton}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 8px 25px 0 rgba(99, 102, 241, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 14px 0 rgba(99, 102, 241, 0.3)';
                            }}
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.footerContainer}>
                    <div style={styles.footerGrid}>
                        {/* Company Info */}
                        <div style={styles.footerSection}>
                            <h3 style={styles.footerTitle}>Trinix</h3>
                            <p style={{ color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>
                                Empowering businesses through innovative technology solutions and digital transformation.
                            </p>
                        </div>

                        {/* Services */}
                        <div style={styles.footerSection}>
                            <h3 style={styles.footerTitle}>Services</h3>
                            <Link
                                to="/what-we-do"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Web Development
                            </Link>
                            <Link
                                to="/what-we-do"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Mobile Apps
                            </Link>
                            <Link
                                to="/what-we-do"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Cloud Solutions
                            </Link>
                            <Link
                                to="/what-we-do"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                AI & ML
                            </Link>
                            <Link
                                to="/what-we-do"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Consulting
                            </Link>
                        </div>

                        {/* Company */}
                        <div style={styles.footerSection}>
                            <h3 style={styles.footerTitle}>Company</h3>
                            <Link
                                to="/about"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/who-we-are"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Our Team
                            </Link>
                            <Link
                                to="/career"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Careers
                            </Link>
                            <Link
                                to="/our-thinking"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Blog
                            </Link>
                            <Link
                                to="/research"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Research
                            </Link>
                        </div>

                        {/* Contact & Legal */}
                        <div style={styles.footerSection}>
                            <h3 style={styles.footerTitle}>Contact</h3>
                            <Link
                                to="/contact"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Get in Touch
                            </Link>
                            <Link
                                to="/projects"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                Our Work
                            </Link>
                            <a
                                href="mailto:hello@trinix.com"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                hello@trinix.com
                            </a>
                            <a
                                href="tel:+91-555-123-4567"
                                style={styles.footerLink}
                                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                            >
                                +1 (555) 123-4567
                            </a>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div style={styles.footerBottom}>
                        <div style={styles.footerBottomContent}>
                            <div style={styles.footerBottomLinks}>
                                <a
                                    href="#"
                                    style={styles.footerBottomLink}
                                    onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    style={styles.footerBottomLink}
                                    onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                >
                                    Terms of Service
                                </a>
                                <a
                                    href="#"
                                    style={styles.footerBottomLink}
                                    onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                >
                                    Cookie Policy
                                </a>
                                <span style={styles.copyrightText}>
                                    © 2025 Trinix. All rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
