🎮 GameTracker
📌 Project Overview

GameTracker is a React web application that allows users to add, view, and delete their favorite video games. The application connects to a Supabase database using the REST API and demonstrates key React concepts such as routing, state management, and component structure.

🎯 Objectives Met

In this project, I successfully:

Connected a React application to a Supabase database using fetch
Organized my project into pages, components, and services
Implemented navigation using React Router DOM
Used useState to manage component state
Used useEffect to fetch and display data
Passed data between components using props
Used environment variables with import.meta.env
🛠️ Technologies Used
React
Vite
React Router DOM
Supabase (REST API)
📁 Folder Structure
gametracker/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── AddGamePage.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── GameCard.jsx
│   │   └── GameForm.jsx
│   ├── services/
│   │   └── gamesService.js
│   ├── App.jsx
│   └── main.jsx
└── .env
🗄️ Database Setup

I created a Supabase table called games with the following columns:

Column	Type
id	int8
title	text
genre	text
rating	int4
created_at	timestamptz
🚀 Features Implemented
🏠 Home Page (/)
Displays all games from the database
Each game shows:
Title
Genre
Rating
Users can delete games
➕ Add Game Page (/add)
Form includes:
Title
Genre
Rating
On submit:
Saves data to Supabase
Redirects back to Home page
🧭 Navigation
Navigation bar is visible on all pages
Includes links to:
Home
Add Game
⚙️ Technical Implementation

All API requests are handled in:

src/services/gamesService.js
Used fetch to interact with Supabase REST API
Stored API credentials in a .env file

Accessed environment variables using:

import.meta.env.VITE_SUPABASE_URL
🔐 Environment Variables

Example .env file:

VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_API_KEY=your_api_key_here

Note: The .env file is included in .gitignore and not pushed to GitHub.

▶️ How to Run the Project
Install dependencies:
npm install
Start the development server:
npm run dev
Open in browser:
http://localhost:5173
🧠 Key Components
App.jsx
Handles routing only
GameForm.jsx
Controls form inputs using useState
GameCard.jsx
Displays game data and handles delete action via props
📌 Reflection

This project helped me better understand how to:

Connect a frontend application to a real backend service
Structure a React project for scalability
Manage data flow between components
Work with APIs and environment variables

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
