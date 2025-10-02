# Trinix Website - Full Stack Application

This is a full-stack web application for Trinix, featuring a React frontend and Node.js/Express backend with MongoDB database.

## Project Structure

```
trinix_web/
├── frontend/          # React frontend application
├── backend/           # Node.js/Express backend API
└── README.md         # This file
```

## Prerequisites

Before running this application, make sure you have installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Quick Start

### 1. Clone and Setup

```bash
# Navigate to the project directory
cd "trinix_web"
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file (copy from example)
cp env.example .env

# Edit .env file with your configuration
# At minimum, set:
# - MONGODB_URI=mongodb://localhost:27017/trinix_db
# - JWT_SECRET=your-secret-key

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup (in a new terminal)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm start
```

The frontend will run on `http://localhost:3000`

## Environment Configuration

### Backend (.env file)

Create a `.env` file in the `backend` directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/trinix_db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development

# Optional: External service configurations
OPENAI_API_KEY=your_openai_api_key
PINECONE_API_KEY=your_pinecone_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

## Features

### Frontend Features
- Modern React application with React Router
- User authentication (Login/Register)
- User dashboard for idea submission
- Admin dashboard for management
- Responsive design with modern UI
- Real-time chatbot integration

### Backend Features
- RESTful API with Express.js
- JWT-based authentication
- MongoDB database with Mongoose ODM
- User management and role-based access
- Idea submission and management system
- Secure password hashing with bcrypt
- Input validation with Joi
- CORS configuration for cross-origin requests

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Dashboard
- `GET /api/dashboard/stats` - Get user dashboard statistics
- `GET /api/dashboard/ideas` - Get user ideas
- `POST /api/dashboard/ideas` - Submit new idea
- `PUT /api/dashboard/ideas/:id` - Update idea
- `DELETE /api/dashboard/ideas/:id` - Delete idea

### Projects, Research, Jobs
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project (auth required)
- `GET /api/researches` - Get all research items
- `POST /api/researches` - Create research (auth required)
- `GET /api/jobs` - Get all job listings
- `POST /api/jobs` - Create job (auth required)

### Chat
- `POST /api/chat` - Send message to chatbot

## Development

### Running in Development Mode

Backend with auto-reload:
```bash
cd backend
npm run dev
```

Frontend with hot reload:
```bash
cd frontend
npm start
```

### Building for Production

Frontend build:
```bash
cd frontend
npm run build
```

Backend production:
```bash
cd backend
npm start
```

## Database Schema

### User Model
- Basic user information (name, email, company)
- Password hashing and JWT authentication
- Role-based access control (user, admin)

### Idea Model
- User-submitted ideas with categories and tags
- Status tracking (Draft, Under Review, Published)
- Priority levels and metadata

### Project/Research/Job Models
- Content management for website sections
- Admin-controlled publishing

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Input validation and sanitization
- CORS protection
- Helmet.js security headers
- Role-based access control

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally or check your MONGODB_URI
   - Verify network connectivity for MongoDB Atlas

2. **JWT Token Issues**
   - Check that JWT_SECRET is set in your .env file
   - Verify token format and expiration

3. **CORS Issues**
   - Backend CORS is configured for localhost:3000
   - Update CORS settings for production domains

4. **Port Conflicts**
   - Backend uses port 5000, frontend uses port 3000
   - Change ports in package.json if needed

### Logs and Debugging

- Backend logs are displayed in the terminal
- Frontend logs are in the browser console
- Check network tab for API request/response details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Trinix.
