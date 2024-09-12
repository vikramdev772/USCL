import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaEdit, FaSave } from "react-icons/fa";
import { FaLock, FaShieldAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Landing from "../components/Landing";
import cyber from "../images/cyber.jpg";
const Cybersecurity = () => {
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

      ctx.fillStyle = "#006eff";
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
                Master the art of digital defense. Learn cutting-edge techniques
                to protect systems, networks, and data from cyber threats. Join
                our comprehensive course and become a cybersecurity expert.
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
  );
};

export default Cybersecurity;
