import React from 'react'
import { Link } from 'react-router-dom';
import h from "../images/home.jpg";

const Home = () => {
  return (
    <div>
    <center>
      <h1 className='text-3xl text-blue-300 mt-10' >Home</h1>
      <br />
      <br />
      <img src={h} alt="h" className="w-[1000px]" />
    </center>
   
    </div>
  )
}

export default Home