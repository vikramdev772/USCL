import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Networking from "../images/Networking.jpg";
import Webdev from "../images/webdev.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Color configuration object
const colorConfig = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    hover: "hover:bg-blue-500/20",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/20",
    hover: "hover:bg-green-500/20",
  },
  red: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/20",
    hover: "hover:bg-red-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
    hover: "hover:bg-cyan-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
    hover: "hover:bg-violet-500/20",
  },
  sky: {
    bg: "bg-sky-500/10",
    text: "text-sky-400",
    border: "border-sky-500/20",
    hover: "hover:bg-sky-500/20",
  },
};

const courseData = [
  {
    title: "Java Development",
    description: "Dive into Java and master core concepts with comprehensive tutorials and exercises.",
    image: "https://miro.medium.com/v2/resize:fit:500/1*pu_q-NQV_EnIHBgHdZsrXQ.jpeg",
    link: "/courses/java",
    color: "blue",
  },
  {
    title: "Linux Essentials",
    description: "Gain essential Linux skills and knowledge to navigate and manage Linux systems effectively.",
    image: "https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=100&fit=clip&auto=format",
    link: "/courses/linux",
    color: "green",
  },
  {
    title: "C++ Programming",
    description: "Master the fundamentals of C++ and gain a strong foundation in Data Structures and Algorithms (DSA) to enhance problem-solving skills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9dbxk51ZpBlxEBGUQN7nAODZdc1BZx29p3TEfnrJYFLOsHnv3KgSu9CToYENFgBsOhs&usqp=CAU",
    link: "/courses/c++",
    color: "red",
  },
  {
    title: "Networking",
    description: "Learn how to design, implement, and manage network infrastructures and protocols.",
    image: "https://assets.datamation.com/uploads/2023/12/dm_20231214-network-data-model-696x447.png",
    link: "/courses/networking",
    color: "cyan",
  },
  {
    title: "Cybersecurity",
    description: "Gain skills to protect systems and networks from digital attacks and security breaches.",
    image: "https://bifa.org/wp-content/uploads/2024/04/FIATA-New-Guide-Cybersecurity-1-848x477.png",
    link: "/courses/cybersecurity",
    color: "violet",
  },
  {
    title: "Web development",
    description: "Discover the principles of building and maintaining websites and web applications.",
    image: "https://clickysoft.com/wp-content/uploads/2023/11/Benefits-of-MERN-Stack-Developers.jpg",
    link: "/courses/webdevelopment",
    color: "sky",
  },
];

const CourseCard = ({ course, index }) => {
  const colors = colorConfig[course.color];

  const cardAnimationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
  };

  return (
    <motion.div
      {...cardAnimationProps}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
      </div>
      
      {/* Content Container */}
      <div className="relative p-6">
        <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>
          {course.title}
        </h3>
        <p className="text-gray-300 mb-6 line-clamp-3">
          {course.description}
        </p>

        {/* Explore Course Button */}
        <Link
          to={course.link}
          className={`
            inline-flex items-center gap-2 px-6 py-3 
            rounded-lg
            ${colors.border}
            border
            ${colors.text}
            ${colors.bg}
            relative 
            cursor-pointer
            overflow-hidden
            group/button
            transition-all duration-300
          `}
        >
          <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover/button:translate-x-1">
            Explore Course
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </span>
          {/* Button Hover Effect */}
          <div 
            className={`
              absolute inset-0 
              ${colors.hover}
              opacity-0
              group-hover/button:opacity-100
              transform transition-all duration-300 
              -skew-x-12 
              -translate-x-full
              group-hover/button:translate-x-0
            `}
          />
        </Link>
      </div>

      {/* Card Hover Gradient Effect */}
      <div 
        className={`
          absolute inset-0 
          bg-gradient-to-br 
          from-transparent 
          via-transparent 
          to-${course.color}-500/10
          opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300
        `}
      />
    </motion.div>
  );
};

const Courses = () => {
  const headerAnimationProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
    <Navbar/>
      <section className="relative min-h-screen">
        {/* Background Elements */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0c1322] to-black -z-10" />
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />

        {/* Content */}
        <div className="container mx-auto px-4 py-24">
          <motion.div
            {...headerAnimationProps}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-6">
              Explore Our Courses
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover comprehensive learning paths designed to take you from beginner to expert in your chosen field.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;