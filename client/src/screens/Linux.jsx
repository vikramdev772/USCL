import React from 'react';
import { FaTerminal, FaServer, FaNetworkWired, FaUserShield } from 'react-icons/fa';

const Linux = () => {
  const features = [
    { icon: <FaTerminal />, title: 'Command Line Mastery', description: 'Master essential terminal commands and scripting.' },
    { icon: <FaServer />, title: 'System Administration', description: 'Learn to manage and configure Linux systems effectively.' },
    { icon: <FaNetworkWired />, title: 'Networking Fundamentals', description: 'Understand Linux networking concepts and tools.' },
    { icon: <FaUserShield />, title: 'Security Basics', description: 'Explore Linux security principles and best practices.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}>
        <div className="bg-black bg-opacity-70 min-h-screen">
          <header className="container mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">Linux Essentials</h1>
            <p className="text-xl md:text-2xl text-gray-300">Master the core skills of Linux administration</p>
          </header>

          <main className="container mx-auto px-4 py-12">
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-green-300">Course Overview</h2>
              <p className="text-lg text-gray-300 max-w-3xl">
                Dive into the world of Linux with our comprehensive Linux Essentials course. Whether you're a beginner or looking to solidify your skills, this course covers everything from basic commands to advanced system administration techniques.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-green-300">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="text-green-400 text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-semibold mb-6 text-green-300">Ready to Get Started?</h2>
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-green-600 hover:to-green-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Enroll Now
              </button>
            </section>
          </main>

          <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
            <p>© 2024 Linux Essentials Course. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Linux;
