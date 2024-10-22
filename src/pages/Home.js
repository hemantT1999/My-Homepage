import React, { useState } from "react";
import profileImage from "../Images/portfolio image.jpg";

function Home() {
  const [stories, setStories] = useState([
    { title: "My First Story", description: "This is the first story." },
    {
      title: "Adventure Begins",
      description: "A journey of a thousand miles begins with a single step.",
    },
  ]);

  const addStory = () => {
    const newStory = {
      title: "New Story",
      description: "This is a new story.",
    };
    setStories((prevStories) => [...prevStories, newStory]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 flex flex-col items-center justify-center py-10 space-y-12">
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-8 max-w-lg w-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition duration-500 ease-in-out">
        <div className="flex items-center space-x-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg hover:scale-110 transform transition duration-500"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-black">
              Hemant Tandan
            </h1>
            <p className="text-black">Full Stack Developer</p>
            <a
              href="https://github.com/hemantT1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 underline transition duration-300"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-lg p-6 max-w-2xl w-full shadow-inner hover:shadow-2xl transition-all duration-500 ease-in-out">
        <h2 className="text-4xl font-semibold text-white mb-6 transition-colors hover:text-blue-200 duration-300">
          Stories
        </h2>

        <button
          onClick={addStory}
          className="mb-8 px-8 py-3 text-white font-bold bg-gradient-to-r from-green-400 to-teal-500 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
        >
          Create New Story
        </button>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stories.length === 0 ? (
            <p className="text-gray-300 text-lg">No stories available.</p>
          ) : (
            stories.map((story, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-out hover:bg-opacity-80"
              >
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500">
                  {story.title}
                </h3>
                <p className="text-gray-600 mt-2">{story.description}</p>
                <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
                  <p className="text-gray-800 px-6 py-4">
                    Click to read more about "{story.title}"
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
