# Personal Website

A full-stack personal website built with JavaScript, React, Node.js, Express and MongoDB, featuring a guestbook and dark mode support. The website can be viewed at https://amanda-uppgard.onrender.com/

## Project Overview

This is my personal website with the following features:
- **Home Page**: Landing page with introduction
- **About**: Information about me, my skills, projects and future plans
- **Guestbook**: Interactive guestbook with database persistence and backend pagination
- **Contact**: Contact information
- **Dark Mode**: Theme toggle for light/dark mode

## Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Pixel Icon Library** - Icon assets

### Backend
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **dotenv** - Environment variable management
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:
   ```
   MONGODB_URI=mongodb://...
   PORT=3001
   NODE_ENV=development
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Project

**Terminal 1 - Backend Server:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
cp -r dist ../backend
```

This creates a production build in the `frontend/dist` directory and copies it to the backend.
