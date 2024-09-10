import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-black bg-pattern">
      <div className="w-full max-w-3xl p-8 space-y-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300">Empowering learners through hands-on education in programming and technology.</p>
        </div>

        <div className="space-y-6">
          <section className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Who We Are</h2>
            <p className="mt-2 text-gray-400">
              We are a passionate team of educators and developers, dedicated to providing quality education in programming, ethical hacking, and web development. Our goal is to create a space for students to learn and grow through real-world projects and problem-solving.
            </p>
          </section>

          <section className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
            <p className="mt-2 text-gray-400">
              To empower the next generation of tech leaders by providing them with the tools and knowledge they need to succeed in the ever-evolving field of technology.
            </p>
          </section>

          <section className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Our Values</h2>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>- Innovation: Constantly evolving our methods to stay ahead in the tech world.</li>
              <li>- Accessibility: Ensuring education is available to everyone, everywhere.</li>
              <li>- Community: Fostering a supportive environment for learners to collaborate and grow.</li>
            </ul>
          </section>

          <section className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p className="mt-2 text-gray-400">Feel free to reach out to us at <a href="mailto:info@yourcompany.com" className="text-blue-400 hover:text-blue-500">info@yourcompany.com</a></p>
          </section>
        </div>
      </div>

      <footer className="mt-8 text-center">
        <p className="text-gray-400 mb-4">Connect with us</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaGithub className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
