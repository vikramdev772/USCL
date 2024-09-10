import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaPlus, FaEdit, FaMicrophone } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Passionate developer with a love for creating innovative solutions.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    website: 'https://johndoe.dev',
    socialMedia: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    },
    recentActivities: [
      { id: 1, activity: 'Completed React Course' },
      { id: 2, activity: 'Contributed to Open Source Project' },
      { id: 3, activity: 'Launched Personal Website' }
    ],
    skills: [
      { id: 1, name: 'React', icon: '⚛️', description: 'Advanced proficiency in React development' },
      { id: 2, name: 'Node.js', icon: '🚀', description: 'Backend development with Node.js' },
      { id: 3, name: 'GraphQL', icon: '🔗', description: 'API development using GraphQL' }
    ],
    projects: [
      { id: 1, name: 'E-commerce Platform', description: 'Built a scalable e-commerce solution' },
      { id: 2, name: 'Task Management App', description: 'Developed a productivity app for teams' },
      { id: 3, name: 'AI Chatbot', description: 'Created an AI-powered customer support chatbot' }
    ],
    about: 'I am a full-stack developer with 5 years of experience in building web applications. My passion lies in creating efficient, scalable, and user-friendly solutions. I enjoy tackling complex problems and continuously learning new technologies.',
    testimonials: [
      { id: 1, name: 'Jane Smith', text: 'John is an exceptional developer. His attention to detail and problem-solving skills are unmatched.' },
      { id: 2, name: 'Mike Johnson', text: 'Working with John was a pleasure. He consistently delivered high-quality code and met all deadlines.' },
      { id: 3, name: 'Sarah Lee', text: 'John\'s expertise in React helped our team deliver a complex project on time and within budget.' }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated user data to a backend API
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addSkill = () => {
    const newSkill = { id: user.skills.length + 1, name: 'New Skill', icon: '🔧', description: 'Skill description' };
    setUser({ ...user, skills: [...user.skills, newSkill] });
  };

  const addProject = () => {
    const newProject = { id: user.projects.length + 1, name: 'New Project', description: 'Project description' };
    setUser({ ...user, projects: [...user.projects, newProject] });
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-black text-white">
      <header className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Tech Journey</h1>
          <p className="text-xl mb-8">Exploring the world of code, one project at a time</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Explore Projects
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative mb-8 md:mb-0 md:mr-8">
              <img src={user.avatar} alt={user.name} className="w-48 h-48 rounded-full object-cover" />
              {isEditing && (
                <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer">
                  <FaEdit className="text-white" />
                  <input id="avatar-upload" type="file" className="hidden" onChange={handleAvatarUpload} accept="image/*" />
                </label>
              )}
            </div>
            <div className="flex-grow">
              {isEditing ? (
                <form onSubmit={handleSave}>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white text-3xl font-bold mb-2 w-full p-2 rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white mb-4 w-full p-2 rounded"
                  />
                  <textarea
                    name="bio"
                    value={user.bio}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white mb-4 w-full p-2 rounded"
                    rows="3"
                  ></textarea>
                  <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Save Changes
                  </button>
                </form>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
                  <p className="mb-4">{user.email}</p>
                  <p className="mb-4">{user.bio}</p>
                </>
              )}
              <div className="flex space-x-4">
                <a href={user.socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGithub size={24} />
                </a>
                <a href={user.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
                <a href={user.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaTwitter size={24} />
                </a>
                <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGlobe size={24} />
                </a>
              </div>
            </div>
            {!isEditing && (
              <button onClick={handleEdit} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0">
                Edit Profile
              </button>
            )}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="space-y-2">
              {user.recentActivities.map((activity) => (
                <li key={activity.id} className="bg-gray-700 p-2 rounded">{activity.activity}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.skills.map((skill) => (
                  <div key={skill.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                    <p className="text-gray-300">{skill.description}</p>
                  </div>
                ))}
              </div>
              <button onClick={addSkill} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaPlus className="mr-2" /> Add Skill
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Projects</h3>
              <div className="space-y-4">
                {user.projects.map((project) => (
                  <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                ))}
              </div>
              <button onClick={addProject} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaPlus className="mr-2" /> Add Project
              </button>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">{user.about}</p>
          <button onClick={() => speak(user.about)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaMicrophone className="mr-2" /> Listen
          </button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg"
          >
            {user.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="text-center">
                  <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 {user.name}. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href={user.socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href={user.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href={user.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserProfile;