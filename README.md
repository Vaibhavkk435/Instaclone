# Socio Pedia

Socio Pedia is a MERN stack social media platform inspired by Instagram, designed specifically for coders and developers to connect and share their work.

**You can view the project at :** https://sociopediainsta.vercel.app/
## Features

- User authentication & authorization with JWT
- Create, like, and comment on posts
- Follow/unfollow users
- Personalized feed based on connections
- Profile customization
- Image upload and sharing
- Responsive design for all devices

## Tech Stack

### Frontend
- React with Vite
- Chakra UI for components
- Firebase for storage
- Zustand for state management
- React Router for navigation
- Framer Motion for animations

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads

## Installation

### Prerequisites
- Node.js (v14.x or later)
- MongoDB (local or Atlas)
- npm or yarn

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/sociopedia.git
   cd sociopedia
   ```

2. Backend Setup
   ```bash
   # Navigate to server directory
   cd server
   
   # Install dependencies
   npm install
   
   # Configure environment variables
   # Create .env file with:
   # PORT=3001
   # MONGO_URI=your_mongodb_connection_string
   # JWT_SECRET=your_secret_key
   
   # Start server
   npm start
   ```

3. Frontend Setup
   ```bash
   # Navigate to client directory
   cd client
   
   # Install dependencies
   npm install
   
   # Start development server
   npm run dev
   ```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start server
- `npm run dev` - Start with nodemon

## Project Structure

```
sociopedia/
├── client/              # Frontend React app
│   ├── public/          # Static files
│   └── src/             
│       ├── assets/      # Images, fonts
│       ├── components/  # UI components
│       ├── pages/       # App pages
│       ├── hooks/       # Custom hooks
│       ├── store/       # Zustand store
│       └── utils/       # Helper functions
└── server/              # Backend Node.js app
    ├── controllers/     # Route controllers
    ├── models/          # MongoDB schemas
    ├── routes/          # API endpoints
    ├── middleware/      # Custom middleware
    └── index.js         # Server entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/feature-name`)
3. Commit changes (`git commit -m 'Add some feature'`)
4. Push to branch (`git push origin feature/feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Made by [Your Name](https://github.com/yourusername)
