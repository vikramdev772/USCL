import React from "react";
import { FaPlay, FaShoppingCart } from "react-icons/fa";

const Webcourse = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
          Master the Art of Learning
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl mb-8">
            <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg shadow-2xl"></div>
            <video
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              poster="https://png.pngtree.com/background/20210715/original/pngtree-digital-technology-low-poly-design-picture-image_1276779.jpg"
              controls
            >
              <source src="demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Unlock Your Potential
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            Discover our cutting-edge courses and expert instructors
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <FaPlay className="mr-2" /> Watch Full Demo
            </button>
          </div>
        </section>

        {/* Payment Section */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-blue-500 transform hover:scale-105 transition duration-300 ease-in-out max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">
                Premium Course Package
              </h3>
              <p className="text-5xl font-bold text-blue-500 mb-6">₹8999</p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
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
                    className="w-5 h-5 mr-2 text-blue-500"
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
                    className="w-5 h-5 mr-2 text-blue-500"
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
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-blue-900 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                <FaShoppingCart className="mr-2" /> Proceed to Payment
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-black text-center py-6">
        <p>&copy; 2024 USCL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Webcourse;
