

import React from "react";
import { FaCode, FaDatabase, FaLightbulb, FaPuzzlePiece } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cpp = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between text-white">
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4">
          C++ Programming Mastery: Data Structures & Algorithms
        </h1>
        <p className="text-xl md:text-2xl">Unlock the Power of C++</p>
      </header>

      <section
        style={{ backgroundImage: "url(https://images.stockcake.com/public/6/1/5/615f89ef-a7a4-4b04-b31f-fe483c990032_large/coding-at-night-stockcake.jpg)" }}
        className="bg-cover bg-center py-28 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Course Highlights
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <FaCode />, text: "In-Depth C++ Fundamentals" },
              { icon: <FaDatabase />, text: "Master Data Structures" },
              { icon: <FaLightbulb />, text: "Algorithmic Techniques" },
              { icon: <FaPuzzlePiece />, text: "Practical Problem Solving" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 bg-slate-900 p-4 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <span className="text-3xl text-red-500">{item.icon}</span>
                <span className="text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
          Enhance Your Coding Journey
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Elevate your programming prowess and prepare for advanced software
          development with our expertly crafted curriculum. Whether you're
          aiming to excel in coding interviews or develop high-performance
          applications, this course is your gateway to mastering C++ and DSA.
        </p>
        <Link to="/courses/dsa-cpp">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          aria-label="Start Your Learning Adventure Today"
        >
          Start Your Learning Adventure Today!
        </button>
        </Link>
      </footer>
    </div>
  );
};

export default Cpp;
