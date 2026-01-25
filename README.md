# Personal Website

A full-stack personal website built with React and Express, featuring a dynamic guestbook, dark mode support, and a responsive design. The website can be viewed at https://amanda-uppgard.onrender.com/

## Project Overview

This is my personal website showcasing a portfolio with the following features:
- **Home Page**: Landing page with introduction
- **About**: Information about the owner
- **Guestbook**: Interactive guestbook with database persistence
- **Contact**: Contact information and form
- **Dark Mode**: Theme toggle for light/dark mode

## Tech Stack

### Frontend
- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Vite 7** - Build tool and dev server
- **ESLint** - Code linting
- **Pixel Icon Library** - Icon assets

### Backend
- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 9** - MongoDB ODM
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
The server will run on `http://localhost:3001`

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
```
The frontend will typically run on `http://localhost:5173`

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

This creates an optimized production build in the `frontend/dist` directory.

## Available Scripts

### Backend
- `npm start` - Start the Express server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints

### Guestbook
- `GET /api/guestbook` - Retrieve all guestbook entries
- `POST /api/guestbook` - Create a new guestbook entry

## Features

- Responsive design for mobile and desktop
- Dark mode / Light mode toggle
- Persistent guestbook with MongoDB
- Client-side routing with React Router
- Clean and modern UI
- Fast development with Vite

## Author

Amanda Uppgård - [GitHub](https://github.com/amandauppgard)

## License

ISC
