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

const CourseCard = ({ course, index }) => (
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
      <Link
        to={course.link}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-${course.color}-500/10 border border-${course.color}-500/20 text-${course.color}-400 hover:bg-${course.color}-500/20 transition-all duration-300 `}
      >
        Explore Course
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    {/* Decorative gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br from-${course.color}-500/0 via-transparent to-${course.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
  </motion.div>
);

const Courses = () => {
  return (
    <>
      <section className="relative min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0c1322] to-black -z-10" />
        
        {/* Decorative grid */}
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />

        {/* Content */}
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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