import React from "react";

function Stories() {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Stories
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-500">
          <h3 className="text-2xl font-semibold mb-3 hover:text-yellow-300 transition duration-300">
            My First Story
          </h3>
          <p className="text-lg">This is the first story.</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-teal-600 text-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-500">
          <h3 className="text-2xl font-semibold mb-3 hover:text-yellow-300 transition duration-300">
            Adventure Begins
          </h3>
          <p className="text-lg">A journey of a thousand miles.</p>
        </div>
      </div>
    </div>
  );
}

export default Stories;
