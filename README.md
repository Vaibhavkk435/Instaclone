Socio Pedia
Show Image <!-- If you have a logo -->
Socio Pedia is a full-featured MERN stack social media platform designed specifically for coders and developers. Think of it as Instagram for the coding community - a place to share projects, snippets, and connect with fellow developers.

You can view the project at : https://sociopediainsta.vercel.app/

✨ Features

User Authentication - Secure login and registration system
Profile Management - Customize your developer profile
Social Interactions - Follow users, like posts, and comment
News Feed - Personalized feed based on who you follow
Image Sharing - Post images of your projects and code
Dark/Light Mode - Toggle between themes for comfortable viewing
Responsive Design - Works seamlessly on mobile and desktop

🛠️ Technologies Used
Frontend

React - UI library
Vite - Next-generation frontend tooling
Chakra UI - Component library for accessible UI
Firebase - Cloud services and storage
Framer Motion - Animation library
Zustand - State management
React Router - Navigation and routing
React Icons - Icon library

Backend

Node.js - JavaScript runtime
Express.js - Web framework
MongoDB - NoSQL database
Mongoose - Object data modeling
Bcryptjs - Password hashing
JSON Web Token - Authentication
Multer - File upload handling
Dotenv - Environment variables

📋 Prerequisites

Node.js (v14.x or later)
MongoDB (local or Atlas connection)
npm or yarn

🚀 Installation and Setup
Clone the Repository
bashgit clone https://github.com/yourusername/sociopedia.git
cd sociopedia
Backend Setup

Navigate to the server directory:
bashcd server

Install dependencies:
bashnpm install

Create a .env file with the following variables:
PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the server:
bashnpm start


Frontend Setup

Navigate to the client directory:
bashcd client

Install dependencies:
bashnpm install

Create a .env file for Firebase and other configurations if needed.
Start the development server:
bashnpm run dev


📜 Available Scripts
Frontend

npm run dev - Start development server at http://localhost:3000
npm run build - Build for production to the dist folder
npm run lint - Run ESLint to check code quality
npm run preview - Preview production build locally

Backend

npm start - Start the server
npm run dev - Start server with nodemon for auto-reloading

📁 Project Structure
sociopedia/
├── client/              # Frontend React application
│   ├── public/          # Static files
│   ├── src/             
│   │   ├── assets/      # Images, fonts, etc.
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # App pages/routes
│   │   ├── hooks/       # Custom React hooks
│   │   ├── store/       # Zustand state management
│   │   ├── theme/       # Chakra UI theme customization
│   │   ├── utils/       # Helper functions
│   │   ├── App.jsx      # Main component
│   │   └── main.jsx     # Entry point
│   └── package.json     # Frontend dependencies
└── server/              # Backend Node.js application
    ├── controllers/     # Route controllers
    ├── models/          # MongoDB schemas
    ├── routes/          # API routes
    ├── middleware/      # Custom middleware
    ├── utils/           # Helper functions
    ├── index.js         # Server entry point
    └── package.json     # Backend dependencies
📸 Screenshots
<!-- Add actual screenshots of your application here -->
Show Image
Show Image
🔐 Authentication Flow

Registration with email and password
JWT token generation upon login
Token storage in local storage
Protected routes with authentication middleware

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
📧 Contact
Your Name - your.email@example.com
Project Link: https://github.com/yourusername/sociopedia
