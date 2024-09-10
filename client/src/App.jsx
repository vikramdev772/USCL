
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UserProfile from './components/UserProfile'
import Courses from './screens/Courses'
import Learn from './screens/Learn'
import About from './pages/About'



function App() {

  console.log("APP.js is running 💻")

  return (
    <>
    <BrowserRouter>
     <Navbar/> 
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/user" element={<UserProfile/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/learn" element={<Learn/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
