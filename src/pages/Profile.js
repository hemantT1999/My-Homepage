import React, { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Hemant Tandan");
  const [title, setTitle] = useState("Full Stack Developer");
  const [location, setLocation] = useState("City, Country");
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
  ]);
  const [email, setEmail] = useState("hemanttandan82@gmail.com");
  const [linkedin, setLinkedin] = useState(
    "https://www.linkedin.com/in/hemant-tandan-126983224/"
  );
  const [github, setGithub] = useState("https://github.com/hemantT1999");

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10 hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4">
        <img
          src={require("D:\\my-homepage\\src\\Images\\portfolio image.jpg")} // Update to your profile photo path
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <div className="animate-pulse text-3xl font-bold text-gray-700 transition-opacity duration-500 ease-in-out hover:text-blue-500">
          {name}
        </div>
        <p className="text-lg text-gray-700">
          Passionate full stack developer with a focus on creating seamless and
          efficient web applications.
        </p>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
            Skills
          </h3>
          <p className="text-gray-600">{skills.join(", ")}</p>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
            Contact
          </h3>
          <p className="text-gray-600">Email: {email}</p>
          <p className="text-gray-600">
            LinkedIn:{" "}
            <a
              href={linkedin}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedin}
            </a>
          </p>
          <p className="text-gray-600">
            GitHub:{" "}
            <a
              href={github}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {github}
            </a>
          </p>
        </div>
        <button
          onClick={handleEditProfile}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded w-full p-2"
            />
          </label>
          <label className="block mb-2">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded w-full p-2"
            />
          </label>
          <label className="block mb-2">
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded w-full p-2"
            />
          </label>
          <label className="block mb-2">
            Skills (comma separated):
            <input
              type="text"
              value={skills.join(", ")}
              onChange={(e) =>
                setSkills(
                  e.target.value.split(",").map((skill) => skill.trim())
                )
              }
              className="border rounded w-full p-2"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full p-2"
            />
          </label>
          <label className="block mb-2">
            LinkedIn:
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className="border rounded w-full p-2"
            />
          </label>
          <label className="block mb-2">
            GitHub:
            <input
              type="url"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="border rounded w-full p-2"
            />
          </label>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleSaveProfile}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
