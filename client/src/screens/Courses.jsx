import React from "react";
import Networking from "../images/Networking.jpg";
import Webdev from "../images/webdev.jpg";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black "></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Java Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:500/1*pu_q-NQV_EnIHBgHdZsrXQ.jpeg"
              alt="Java Programming"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Java Programming
            </h3>
            <p className="text-gray-300 mb-6">
              Dive into Java and master core concepts with comprehensive
              tutorials and exercises.
            </p>
            <Link
              to="/courses/java"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600  transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>

          {/* Linux Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=100&fit=clip&auto=format"
              alt="Linux Essentials"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Linux Essentials
            </h3>
            <p className="text-gray-300 mb-6">
              Gain essential Linux skills and knowledge to navigate and manage
              Linux systems effectively.
            </p>
            <Link
              to="/courses/linux"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>

          {/* C++ Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9dbxk51ZpBlxEBGUQN7nAODZdc1BZx29p3TEfnrJYFLOsHnv3KgSu9CToYENFgBsOhs&usqp=CAU"
              alt="C++ Programming"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              C++ Programming
            </h3>
            <p className="text-gray-300 mb-6">
              Master the fundamentals of C++ and gain a strong foundation in
              Data Structures and Algorithms (DSA) to enhance problem-solving
              skills.
            </p>
            <Link
              to="/courses/c++"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white  bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>

          {/* Networking Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src={Networking}
              alt="Networking"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Networking
            </h3>
            <p className="text-gray-300 mb-6">
              Learn how to design, implement, and manage network infrastructures
              and protocols.
            </p>
            <Link
              to="/courses/networking"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>

          {/* Cybersecurity Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src="https://bifa.org/wp-content/uploads/2024/04/FIATA-New-Guide-Cybersecurity-1-848x477.png"
              alt="Cybersecurity"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-violet-400 mb-4">
              Cybersecurity
            </h3>
            <p className="text-gray-300 mb-6">
              Gain skills to protect systems and networks from digital attacks
              and security breaches.
            </p>
            <Link
              to="/courses/cybersecurity"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-500 hover:bg-violet-600 transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>

          {/* Web Development Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src={Webdev}
              alt="Web Development"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-sky-400 mb-4">
              Web Development
            </h3>
            <p className="text-gray-300 mb-6">
              Discover the principles of building and maintaining websites and
              web applications.
            </p>
            <Link
              to="/courses/webdevelopment"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 transition duration-300 ease-in-out"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
