import React from "react";
import { FaCode, FaServer, FaDatabase, FaCheckCircle } from "react-icons/fa";
import Fs from "../images/FS.png";
const Webdevlopment = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white font-sans">
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
          Full-Stack Web Development Course
        </h1>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          Enroll Now
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Become a Full-Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            Master both front-end and back-end technologies in one comprehensive
            course
          </p>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <img
            //   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              src={Fs}
              alt="Web Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>
        </section>

        {/* Course Features */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            What You'll Learn
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaCode className="text-5xl mb-4 text-blue-400" />}
              title="Front-end Development"
              description="Master HTML, CSS, JavaScript, and popular frameworks like React"
            />
            <FeatureCard
              icon={<FaServer className="text-5xl mb-4 text-blue-400" />}
              title="Back-end Development"
              description="Learn server-side programming with Node.js, Express, and APIs"
            />
            <FeatureCard
              icon={<FaDatabase className="text-5xl mb-4 text-blue-400" />}
              title="Database Management"
              description="Work with SQL and NoSQL databases to store and manage data"
            />
          </div>
        </section>

        {/* Course Benefits */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Course Benefits
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BenefitItem text="Hands-on projects to build your portfolio" />
            <BenefitItem text="Industry-relevant curriculum" />
            <BenefitItem text="Expert instructors with real-world experience" />
            <BenefitItem text="Flexible learning schedule" />
          </ul>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-blue-200 mb-8">
            Enroll now and take the first step towards becoming a full-stack
            developer!
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Enroll in the Course
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-black text-center py-6">
        <p>
          &copy; 2024 Full-Stack Web Development Course. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="text-center">
        {icon}
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-blue-200">{description}</p>
      </div>
    </div>
  );
};

const BenefitItem = ({ text }) => {
  return (
    <li className="flex items-center space-x-2 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
      <FaCheckCircle className="text-green-400 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
};

export default Webdevlopment;
