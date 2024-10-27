import React from "react";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Java = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-gray-100 font-sans">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-blue-300">
              Java Programming Course
            </h1>
            <p className="text-xl text-gray-300">
              Master the art of Java development
            </p>
          </header>

          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Java Programming"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-semibold mb-4 text-blue-300">
                Course Overview
              </h2>
              <p className="text-gray-300 mb-6">
                Dive into the world of Java programming with our comprehensive
                course. From basic syntax to advanced concepts, you'll gain the
                skills needed to build robust applications and kickstart your
                career in software development.
              </p>
              <Link to="/courses/core-java">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  {/* View Details */}
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<FaCode className="text-4xl mb-4 text-blue-400" />}
              title="Comprehensive Curriculum"
              description="Cover everything from basic syntax to advanced Java concepts and frameworks."
            />
            <FeatureCard
              icon={<FaLaptopCode className="text-4xl mb-4 text-blue-400" />}
              title="Hands-on Projects"
              description="Build real-world applications to reinforce your learning and expand your portfolio."
            />
            <FeatureCard
              icon={<FaGraduationCap className="text-4xl mb-4 text-blue-400" />}
              title="Industry-Ready Skills"
              description="Gain the knowledge and experience needed to excel in Java development roles."
            />
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-blue-300">
              Ready to become a Java expert?
            </h2>
            <Link to="/courses/core-java">
              <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Start Learning Today
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="py-6 bg-gradient-to-b from-slate-900 to-black text-center text-gray-300">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      <div className="text-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Java;
