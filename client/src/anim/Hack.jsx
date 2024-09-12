import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaEdit, FaSave } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Landing from '../components/Landing';

const Hack = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Passionate tech enthusiast and software developer.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  });

  const [activities, setActivities] = useState([
    { id: 1, action: 'Updated profile picture', date: '2023-06-15' },
    { id: 2, action: 'Completed a new project', date: '2023-06-10' },
    { id: 3, action: 'Joined a new community', date: '2023-06-05' },
  ]);

  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF00';
      ctx.font = fontSize + 'px arial';

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

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setUser(editedUser);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedUser((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <canvas id="matrix-bg" className="absolute inset-0 z-0"></canvas>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-full">
                <img
                  className="w-full h-full object-cover"
                  src={user.avatar}
                  alt={user.name}
                />
                {editing && (
                  <label
                    htmlFor="avatar-upload"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
                  >
                    <span className="text-white text-sm font-medium">
                      Change Avatar
                    </span>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="p-8 md:flex-grow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">
                  {editing ? (
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleChange}
                      className="bg-gray-700 px-2 py-1 rounded"
                    />
                  ) : (
                    user.name
                  )}
                </h2>
                {editing ? (
                  <button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300 flex items-center"
                  >
                    <FaSave className="mr-2" /> Save
                  </button>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 flex items-center"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                )}
              </div>
              <div className="mb-4 flex items-center">
                <FaEnvelope className="mr-2" />
                {editing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                    className="bg-gray-700 px-2 py-1 rounded"
                  />
                ) : (
                  user.email
                )}
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Bio</h3>
                {editing ? (
                  <textarea
                    name="bio"
                    value={editedUser.bio}
                    onChange={handleChange}
                    className="bg-gray-700 px-2 py-1 rounded w-full"
                    rows="3"
                  ></textarea>
                ) : (
                  <p>{user.bio}</p>
                )}
              </div>
            </div>
          </div>
          <div className="p-8 bg-gray-700">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul>
              {activities.map((activity) => (
                <motion.li
                  key={activity.id}
                  className="mb-2 p-2 bg-gray-600 rounded hover:bg-gray-500 transition duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-center">
                    <span>{activity.action}</span>
                    <span className="text-sm text-gray-400">
                      {activity.date}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hack;


// <section
//   className="relative h-screen flex items-center justify-center bg-cover bg-center"
//   style={{
//     backgroundImage: "url(https://cdn.sanity.io/images/tlr8oxjg/production/32820aa3124688cb4caccc029f13c4b4ea28df07-1456x816.png)",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// >
//   {/* Glassmorphism Background */}
//   <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-md"></div>

//   {/* Content */}
//   <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down">
//       Crack the Code to Success with USCL
//     </h2>
//     <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 animate-fade-in-up">
//       Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
//     </p>
//     <a
//       href="#services"
//       className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 animate-bounce-in"
//       aria-label="Get Started"
//     >
//       Get Started
//       <FaArrowRight className="ml-2" />
//     </a>
//   </div>

//   {/* Decorative Gradient Overlay */}
//   <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>
// </section>


// Landing Page origin
// <section
//         className="relative h-screen flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url(https://cdn.sanity.io/images/tlr8oxjg/production/32820aa3124688cb4caccc029f13c4b4ea28df07-1456x816.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Glassmorphism Background */}
//         <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-[2px]"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down">
//             Crack the Code to Success with USCL
//           </h2>
//           <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 animate-fade-in-up">
//             Elevate your programming skills, solve challenges, and unlock the
//             world of coding possibilities.
//           </p>
//           <a
//             href="#services"
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 animate-bounce-in"
//             aria-label="Get Started"
//           >
//             Get Started
//             <FaArrowRight className="ml-2" />
//           </a>
//         </div>

//         {/* Decorative Gradient Overlay */}
//         <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>
//       </section>

// https://purecode.ai/aiprojects/5ae6d27d-963c-4904-a516-87b5cda9300f/0


// https://stock.adobe.com/search?k=coding