import React, { useState } from "react";

function CreateStory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length < 3 || description.length < 10) {
      setError(
        "Title must be at least 3 characters and description at least 10 characters long."
      );
      return;
    }

    setError("");
    alert("Story created successfully!");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">
        Create a Story
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Story Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Story Description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateStory;
