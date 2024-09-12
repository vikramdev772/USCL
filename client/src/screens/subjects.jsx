import React from 'react';

const Subjects = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* C++ Course */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">C++ Programming</h3>
            <p className="text-gray-700 mb-6">
              Master the fundamentals of C++ with hands-on projects and real-world examples.
            </p>
            <a
              href="#cpp-details"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>

          {/* Java Course */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Java Programming</h3>
            <p className="text-gray-700 mb-6">
              Dive into Java and build robust applications with comprehensive tutorials and exercises.
            </p>
            <a
              href="#java-details"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>

          {/* Linux Course */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Linux Essentials</h3>
            <p className="text-gray-700 mb-6">
              Gain essential Linux skills and knowledge to navigate and manage Linux systems effectively.
            </p>
            <a
              href="#linux-details"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
