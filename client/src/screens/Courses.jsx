import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Networking from "../images/Networking.jpg";
import Webdev from "../images/webdev.jpg";
import Footer from "../components/Footer";

const courseData = [
  {
    title: "Java Programming",
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
    image: Networking,
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
    title: "Web Development",
    description: "Discover the principles of building and maintaining websites and web applications.",
    image: Webdev,
    link: "/courses/webdevelopment",
    color: "sky",
  },
];

const CourseCard = ({ course, index }) => {
  const buttonClasses = {
    blue: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20 text-blue-400",
    green: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20 text-green-400",
    red: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20 text-red-400",
    cyan: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/20 text-cyan-400",
    violet: "bg-violet-500/10 hover:bg-violet-500/20 border-violet-500/20 text-violet-400",
    sky: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/20 text-sky-400",
  };

  const gradientClasses = {
    blue: "from-blue-500/0 via-transparent to-blue-500/10",
    green: "from-green-500/0 via-transparent to-green-500/10",
    red: "from-red-500/0 via-transparent to-red-500/10",
    cyan: "from-cyan-500/0 via-transparent to-cyan-500/10",
    violet: "from-violet-500/0 via-transparent to-violet-500/10",
    sky: "from-sky-500/0 via-transparent to-sky-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
      </div>
      
      <div className="relative p-6">
        <h3 className={`text-2xl font-bold text-${course.color}-400 mb-3`}>
          {course.title}
        </h3>
        <p className="text-gray-300 mb-6 line-clamp-3">
          {course.description}
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to={course.link}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border cursor-pointer ${buttonClasses[course.color]} transition-all duration-300 hover:shadow-lg hover:shadow-${course.color}-500/10`}
          >
            Explore Course
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[course.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
};
