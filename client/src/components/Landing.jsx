import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import {
  FaCode,
  FaRocket,
  FaLock,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const teamMembers = [
    {
      name: "Naveen",
      role: "Founder & CEO",
      bio: "Passionate about revolutionizing education through technology.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Vikram Ram",
      role: "CTO",
      bio: "Expert in creating immersive learning experiences with cutting-edge tech.",
      image:
        "https://res.cloudinary.com/datowd0cc/image/upload/v1725973402/vikram/fsxhed3msr2fsupq8azd.png",
    },
    {
      name: "Mike Johnson",
      role: "Lead Instructor",
      bio: "Dedicated to empowering students with practical coding skills.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const milestones = [
    { year: 2015, event: "Founded our organization" },
    { year: 2017, event: "Launched our first online course" },
    { year: 2019, event: "Reached 100,000 students" },
    { year: 2021, event: "Expanded to 50 countries" },
    { year: 2023, event: "Introduced AI-powered personalized learning" },
  ];

  const Card = ({ title, description, icon }) => (
    <div className="max-w-xs w-full bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://cdn.sanity.io/images/tlr8oxjg/production/32820aa3124688cb4caccc029f13c4b4ea28df07-1456x816.png)",
        }}
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-down">
            Crack the Code to Success with USCL
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 animate-fade-in-up">
            Elevate your programming skills, solve challenges, and unlock the
            world of coding possibilities.
          </p>
          <a
            href="#services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 animate-bounce-in"
            aria-label="Get Started"
          >
            Get Started
            <FaArrowRight className="ml-2" />
          </a>
        </div>

        {/* Decorative Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>
      </section>

      {/* Services Section */}
      {/* <section id="services" className="py-20 bg-gradient-to-b from-gray-800 to-black"> */}
      <section id="services" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-bold text-center text-white mb-12">Our Services</h3>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          title="Programming Challenges"
          description="Enhance your skills with a variety of coding challenges tailored to all levels."
          icon={<FaCode className="text-blue-500 text-4xl" />}
        />
        <Card
          title="Expert Tutorials"
          description="Learn from industry experts with comprehensive tutorials and guides."
          icon={<FaRocket className="text-blue-500 text-4xl" />}
        />
        <Card
          title="Secure Coding Practices"
          description="Master secure coding techniques to build robust and safe applications."
          icon={<FaLock className="text-blue-500 text-4xl" />}
        />
      </div>
    </div>
  </section>

      {/* Our Values */}
      <section data-aos="fade-up" className="mb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
          <div
            className={`p-8 rounded-lg ${
              darkMode
                ? "bg-gradient-to-br from-blue-900 to-gray-900"
                : "bg-gradient-to-br from-blue-100 to-gray-100"
            } shadow-lg`}
          >
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>
                <strong>Innovation:</strong> Constantly evolving our curriculum
                and teaching methods
              </li>
              <li>
                <strong>Accessibility:</strong> Making quality education
                available to everyone, everywhere
              </li>
              <li>
                <strong>Community:</strong> Fostering a supportive and
                collaborative learning environment
              </li>
              <li>
                <strong>Excellence:</strong> Striving for the highest standards
                in everything we do
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section data-aos="fade-up" className="mb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg transform transition duration-500 hover:scale-105`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-blue-400 mb-2">
                  {member.role}
                </p>
                <p className="text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Us */}
      <section
        id="contact"
        data-aos="fade-up"
        className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <div
            className={`p-8 rounded-lg ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            } shadow-lg`}
          >
            <p className="text-lg mb-4 text-center">
              We'd love to hear from you! Reach out to us at{" "}
              <a
                href="mailto:info@uscl.com"
                className="text-blue-400 hover:underline"
              >
                info@uscl.com
              </a>{" "}
              or use the form below to subscribe to our newsletter.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="space-y-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full p-3 rounded-lg ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
                required
              />
              <button
                type="submit"
                className={`w-full p-3 rounded-lg ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } transition duration-300`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section data-aos="fade-up" className="mb-16 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className={`text-3xl ${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className={`text-3xl ${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className={`text-3xl ${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className={`text-3xl ${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        // className={`py-6 ${
        //   darkMode ? "bg-gray-800" : "bg-gray-200"
        // }`}
        
        className="py-6 bg-gradient-to-b from-gray-800 to-black" 
      >
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
