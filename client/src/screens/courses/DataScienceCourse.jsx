import React, { useEffect } from "react";
import { FaPlay,FaShieldAlt, FaShoppingCart, FaLock, FaCode } from 'react-icons/fa';
import cyber from "../../images/cyber.jpg";


const DataScienceCourse = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix-bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00bcd4";
      ctx.font = fontSize + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <canvas id="matrix-bg" className="absolute inset-0 z-0"></canvas>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-40 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-60 w-full object-cover md:w-90 opacity-50"
                // src="https://images.unsplash.com/photo-1506748686214-0b1a6e4fa712?auto=format&fit=crop&w=1920&q=80"
                src={cyber}
                alt="Data Science"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">
                New Course
              </div>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-cyan-400 sm:text-4xl">
                Master Data Science
              </h1>
              <p className="mt-4 text-xl text-gray-300 leading-8">
                Dive into the world of data science. Learn data analysis, visualization, and machine learning techniques to make data-driven decisions.
              </p>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaCode className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      Comprehensive Coding Exercises
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <FaLock className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      In-depth Case Studies
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <FaShieldAlt className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      Advanced Analytical Techniques
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-teal-500 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-teal-400 mb-4">
                Premium Data Science Course Package
              </h2>
              <p className="text-5xl font-bold text-teal-500 mb-6">₹7999</p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Lifetime access to course materials
                </li>
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Priority support
                </li>
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Priority access to new content
                </li>
              </ul>
              <button className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg text-xl font-bold hover:from-teal-700 hover:to-teal-900 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                <FaShoppingCart className="mr-2" /> Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceCourse;
