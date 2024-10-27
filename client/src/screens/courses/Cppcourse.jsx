import React from "react";
import { FaPlay, FaShoppingCart } from "react-icons/fa";
import cpp from "../../images/CPP.jpg";

const Cppcourse = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4">
          Master the Art of Learning : C++
        </h1>
        <p className="text-xl md:text-2xl">
          Unlock your potential with our cutting-edge courses and expert
          instructors.
        </p>
      </header>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative aspect-video mb-8">
            <div className="absolute inset-0 bg-red-500 opacity-20 rounded-lg shadow-2xl"></div>
            <video
              className="w-full h-auto max-h-screen object-contain rounded-lg shadow-2xl"
              src="https://res.cloudinary.com/datowd0cc/video/upload/v1726635504/USCL/djtqrxxtdumkjpddeuq5.mp4"
              type="video/mp4"
              poster={cpp}
              controls
            ></video>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Master C++ Data Structures and Algorithms
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unlock your full potential with our expert guidance
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-800 transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <FaPlay className="mr-2" /> Watch Full Demo
            </button>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-red-500 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-red-400 mb-4">
                Premium Course Package
              </h2>
              <p className="text-5xl font-bold text-red-500 mb-6">₹6999</p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-red-500"
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
                    className="w-5 h-5 mr-2 text-red-500"
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
                    className="w-5 h-5 mr-2 text-red-500"
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
              <button className="w-full py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-xl font-bold hover:from-red-700 hover:to-red-900 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                <FaShoppingCart className="mr-2" /> Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cppcourse;
