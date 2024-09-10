import React from 'react';

const Learn = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900  to-black "></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8">
        <h2 className="text-4xl font-extrabold text-white mb-12">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* C++ Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9dbxk51ZpBlxEBGUQN7nAODZdc1BZx29p3TEfnrJYFLOsHnv3KgSu9CToYENFgBsOhs&usqp=CAU" alt="" />
            <h3 className="text-2xl font-bold text-blue-400 mb-4">C++ Programming</h3>
            <p className="text-gray-300 mb-6">
              Master the fundamentals of C++ with hands-on projects and real-world examples.
            </p>
            <a
              href="#cpp-details"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>

          {/* Java Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img src="https://miro.medium.com/v2/resize:fit:500/1*pu_q-NQV_EnIHBgHdZsrXQ.jpeg" alt="" />
            <h3 className="text-2xl font-bold text-green-400 mb-4">Java Programming</h3>
            <p className="text-gray-300 mb-6">
              Dive into Java and build robust applications with comprehensive tutorials and exercises.
            </p>
            <a
              href="#java-details"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>

          {/* Linux Course */}
          <div className="bg-black rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img src="https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=100&fit=clip&auto=format" alt="" />
            <h3 className="text-2xl font-bold text-red-400 mb-4">Linux Essentials</h3>
            <p className="text-gray-300 mb-6">
              Gain essential Linux skills and knowledge to navigate and manage Linux systems effectively.
            </p>
            <a
              href="#linux-details"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
