import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaEdit,
  FaSave,
  FaLock,
  FaShieldAlt,
  FaCode,
  FaShoppingCart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Landing from "../components/Landing";
import cyber from "../images/cyber.jpg";

const Cybersecurity = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix-bg");
    const ctx = canvas.getContext("2d");
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const fontSize = 10;
    const columns = Math.floor(canvasWidth / fontSize);

    const drops = Array.from({ length: columns }, () => 1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.fillStyle = "#006eff";
      ctx.font = `${fontSize}px Arial`;

      drops.forEach((drop, i) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drop * fontSize);

        if (drop * fontSize > canvasHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    const interval = setInterval(draw, 35);

    function handleResize() {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden flex items-center justify-center">
        <canvas id="matrix-bg" className="absolute inset-0 z-0"></canvas>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-black bg-opacity-40 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-60 w-full object-cover md:w-full opacity-50"
                  src={cyber}
                  alt="Cybersecurity"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  New Course
                </div>
                <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-violet-400 sm:text-4xl">
                  Advanced Cybersecurity
                </h1>
                <p className="mt-4 text-xl text-gray-300 leading-8">
                  Master the art of digital defense. Learn cutting-edge
                  techniques to protect systems, networks, and data from cyber
                  threats. Join our comprehensive course and become a
                  cybersecurity expert.
                </p>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FaShieldAlt className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-300">
                        Advanced Security Protocols
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-shrink-0">
                      <FaCode className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-300">
                        Hands-on Coding Exercises
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-shrink-0">
                      <FaLock className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-300">
                        Real-world Case Studies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="py-6 bg-gradient-to-b from-slate-900 to-black text-center text-gray-300">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
};

export default Cybersecurity;


// {/* Payment Section */}
// <div className="mt-16 max-w-md mx-auto">
// <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-indigo-500 transform hover:scale-105 transition duration-300 ease-in-out">
//   <div className="p-8">
//     <h2 className="text-2xl md:text-3xl font-bold text-violet-400 mb-4">
//       Premium Cybersecurity Package
//     </h2>
//     <p className="text-4xl md:text-5xl font-bold text-violet-500 mb-6">₹7999</p>
//     <ul className="text-gray-300 mb-8">
//       <li className="mb-2 flex items-center">
//         <svg
//           className="w-5 h-5 mr-2 text-indigo-500"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//             clipRule="evenodd"
//           />
//         </svg>
//         Lifetime access to course materials
//       </li>
//       <li className="mb-2 flex items-center">
//         <svg
//           className="w-5 h-5 mr-2 text-indigo-500"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//             clipRule="evenodd"
//           />
//         </svg>
//         Priority support
//       </li>
//       <li className="mb-2 flex items-center">
//         <svg
//           className="w-5 h-5 mr-2 text-indigo-500"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//             clipRule="evenodd"
//           />
//         </svg>
//         Priority access to new content
//       </li>
//     </ul>
//     <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-xl font-bold transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
//       <FaShoppingCart className="mr-2" /> Proceed to Payment
//     </button>
//   </div>
// </div>
// </div>
