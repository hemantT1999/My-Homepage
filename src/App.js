import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateStory from "./pages/CreateStory";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
        <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">
            My Home
          </h1>
          <nav className="flex justify-around mb-6">
            <ul className="flex gap-6 text-lg font-semibold">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 hover:scale-105 transform transition duration-300"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className="text-gray-600 hover:text-gray-900 hover:scale-105 transform transition duration-300"
                >
                  Create Story
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-gray-900 hover:scale-105 transform transition duration-300"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateStory />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
