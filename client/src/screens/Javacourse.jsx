// import React from 'react';
// import { FaPlayCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// const Payment= () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-gray-800 py-4 px-6 shadow-md">
//         <nav className="container mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold text-blue-400">EdTech Logo</div>
//           <ul className="flex space-x-6">
//             {['Home', 'Courses', 'Demo', 'Payment'].map((item) => (
//               <li key={item}>
//                 <a
//                   href="#"
//                   className="hover:text-blue-400 transition duration-300 pb-1 border-b-2 border-transparent hover:border-blue-400"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>

//       {/* Main Section (Demo Video) */}
//       <main className="container mx-auto px-6 py-12 flex-grow">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="border-4 border-blue-400 rounded-lg overflow-hidden shadow-2xl">
//             <video
//               className="w-full h-auto"
//               controls
//               poster="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
//             >
//               <source src="#" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <p className="mt-6 mb-8 text-lg">
//             Experience our cutting-edge learning platform in action. This demo showcases our
//             interactive lessons, real-time progress tracking, and personalized learning paths.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center">
//               <FaPlayCircle className="mr-2" />
//               Watch Full Demo
//             </button>
//             <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-full transition duration-300">
//               Enroll Now
//             </button>
//           </div>
//         </div>

//         {/* Payment Dashboard Section */}
//         <div className="mt-20">
//           <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Basic',
//                 features: ['Access to basic courses', 'Limited progress tracking', 'Email support'],
//                 price: '$9.99',
//               },
//               {
//                 name: 'Pro',
//                 features: [
//                   'Access to all courses',
//                   'Advanced progress tracking',
//                   'Priority email support',
//                   'Live Q&A sessions',
//                 ],
//                 price: '$19.99',
//               },
//               {
//                 name: 'Premium',
//                 features: [
//                   'Everything in Pro',
//                   'One-on-one mentoring',
//                   '24/7 phone support',
//                   'Certification program',
//                 ],
//                 price: '$29.99',
//               },
//             ].map((plan) => (
//               <div
//                 key={plan.name}
//                 className="bg-gray-800 border-2 border-blue-400 rounded-lg p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition duration-300"
//               >
//                 <div>
//                   <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
//                   <ul className="mb-8 space-y-2">
//                     {plan.features.map((feature) => (
//                       <li key={feature} className="flex items-center">
//                         <svg
//                           className="w-5 h-5 text-blue-400 mr-2"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <p className="text-4xl font-bold text-blue-400 mb-6">{plan.price}</p>
//                   <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition duration-300">
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 py-8 px-6">
//         <div className="container mx-auto flex flex-wrap justify-between items-center">
//           <div className="flex space-x-6">
//             <a href="#" className="hover:text-blue-400 transition duration-300">
//               Terms of Service
//             </a>
//             <a href="#" className="hover:text-blue-400 transition duration-300">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-blue-400 transition duration-300">
//               Contact Us
//             </a>
//           </div>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="text-blue-400 hover:text-blue-300 transition duration-300"
//               >
//                 <Icon size={24} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Payment;

import React from "react";
import {
  FaPlay,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Javacourse = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative aspect-video mb-8">
            <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-lg shadow-2xl"></div>
            <video
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
              controls
            >
              <source src="demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Master the Art of Learning
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Unlock your potential with our cutting-edge courses and expert
            instructors.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <FaPlay className="mr-2" /> Watch Full Demo
            </button>
            {/* <button className="px-8 py-3 bg-transparent border-2 border-blue-500 rounded-full text-lg font-semibold text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
              Enroll Now
            </button> */}
          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-blue-500 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">
                Premium Course Package
              </h2>
              <p className="text-5xl font-bold text-blue-500 mb-6"> ₹4999</p>
              <ul className="text-gray-300 mb-8">
                <li className="mb-2 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
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
                    className="w-5 h-5 mr-2 text-blue-500"
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
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Certification upon completion */}
                  Priority access to new content
                </li>
              </ul>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-blue-900 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                <FaShoppingCart className="mr-2" /> Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer
        // className={`py-6 ${
        //   darkMode ? "bg-gray-800" : "bg-gray-200"
        // }`}

        className="py-6 bg-gradient-to-b from-slate-900 to-black"
      >
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Javacourse;
