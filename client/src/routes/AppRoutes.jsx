// src/routes/AppRoutes.jsx
import { Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";
import Home from "../components/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserProfile from "../components/UserProfile";
import Courses from "../screens/Courses";
import About from "../pages/About";
import Hack from "../anim/Hack";
import Cybersecurity from "../screens/Cybersecurity";
import Networking from "../screens/Networking";
import Webdevlopment from "../screens/Webdevlopment";
import Linux from "../screens/home/Linux";
import Java from "../screens/home/Java";
import Cpp from "../screens/home/Cpp";
import Javacourse from "../screens/courses/Javacourse";
import Linuxcourse from "../screens/courses/Linuxcourse";
import Cppcourse from "../screens/courses/Cppcourse";
import NetworkingCourse from "../screens/courses/NetworkingCourse";
import DataScienceCourse from "../screens/courses/DataScienceCourse";
import Webcourse from "../screens/courses/Webcourse";
import Sidebar from "../utils/Sidebar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about" element={<About />} />
      <Route path="/h" element={<Hack />} />
      <Route path="/courses/cybersecurity" element={<Cybersecurity />} />
      <Route path="/courses/networking" element={<Networking />} />
      <Route path="/courses/webdevelopment" element={<Webdevlopment />} />
      <Route path="/courses/linux" element={<Linux />} />
      <Route path="/courses/java" element={<Java />} />
      <Route path="/courses/c++" element={<Cpp />} />
      <Route path="/courses/core-java" element={<Javacourse />} />
      <Route path="/courses/linux-essentials" element={<Linuxcourse />} />
      <Route path="/courses/dsa-cpp" element={<Cppcourse />} />
      <Route path="/courses/networkingcourse" element={<NetworkingCourse />} />
      <Route path="/courses/ds" element={<DataScienceCourse />} />
      <Route path="/courses/web2.0" element={<Webcourse />} />
      <Route path="/main" element={<Sidebar />} />
    </Routes>
  );
};

export default AppRoutes;