import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserProfile from "./components/UserProfile";
import Courses from "./screens/Courses";
import About from "./pages/About";
import Hack from "./anim/Hack";
import Cybersecurity from "./screens/Cybersecurity";
import Networking from "./screens/Networking";
import Webdevlopment from "./screens/Webdevlopment";
import Linux from "./screens/Linux";
import Java from "./screens/Java";
import Cpp from "./screens/Cpp";
import Javacourse from "./screens/Javacourse";




function App() {
  console.log("APP.js is running 💻");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/learn" element={<Learn/>}/> */}
          <Route path="/about" element={<About />} />
          <Route path="/h" element={<Hack />} />
          <Route path="/courses/cybersecurity" element={<Cybersecurity />} />
          <Route path="/courses/networking" element={<Networking />} />
          <Route path="/courses/webdevelopment" element={<Webdevlopment />} />
          <Route path="/courses/linux" element={<Linux />} />
          <Route path="/courses/java" element={<Java />} />
          <Route path="/courses/c++" element={<Cpp />} />
          <Route path="/courses/javacourse" element={<Javacourse />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
