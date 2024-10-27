// import React, { useRef, useEffect, useState } from 'react';

// const Networking = () => {
//   const canvasRef = useRef(null);
//   const [mousePos, setMousePos] = useState(null);
//   const [points, setPoints] = useState([]);
//   const maxDist = 200;
//   const colour = "135,206,250"; // Sky Blue

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawPoints(); // Ensure points are redrawn after resizing
//     };

//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       setMousePos({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       });
//     };

//     const drawPoints = () => {
//       generatePoints(80); // Generates and initializes points
//       pointFun(); // Starts the drawing and animation loop
//     };

//     const pointFun = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       if (mousePos) {
//         collision(mousePos, maxDist * 2);
//         draw(mousePos);
//       }
//       points.forEach(point => {
//         collision(point, maxDist);
//         draw(point);
//         update(point);
//       });
//     };

//     const draw = (obj) => {
//       ctx.beginPath();
//       ctx.fillStyle = `rgb(${colour})`;
//       ctx.arc(obj.x, obj.y, obj.dia || 2, 0, 2 * Math.PI);
//       ctx.closePath();
//       ctx.fill();
//     };

//     const update = (obj) => {
//       obj.x += obj.vx;
//       obj.y += obj.vy;
//       if (obj.x > canvas.width + maxDist / 2) obj.x = -(maxDist / 2);
//       if (obj.x < -(maxDist / 2)) obj.x = canvas.width + maxDist / 2;
//       if (obj.y > canvas.height + maxDist / 2) obj.y = -(maxDist / 2);
//       if (obj.y < -(maxDist / 2)) obj.y = canvas.height + maxDist / 2;
//     };

//     const collision = (obj, dist) => {
//       points.forEach(p => {
//         if (obj !== p) {
//           const temp = Math.sqrt(Math.pow((obj.x - p.x), 2) + Math.pow((obj.y - p.y), 2));
//           if (temp < dist) {
//             ctx.beginPath();
//             ctx.moveTo(obj.x, obj.y);
//             ctx.strokeStyle = `rgba(${colour},${0.8 * Math.pow((dist - temp) / dist, 5)})`;
//             ctx.lineTo(p.x, p.y);
//             ctx.closePath();
//             ctx.stroke();
//           }
//         }
//       });
//     };

//     const generatePoints = (amount) => {
//       const newPoints = [];
//       for (let i = 0; i < amount; i++) {
//         newPoints.push({
//           x: (Math.random() * (canvas.width + maxDist)) - (maxDist / 2),
//           y: (Math.random() * (canvas.height + maxDist)) - (maxDist / 2),
//           vx: (Math.random() * 0.01) - 0.005, // Corrected velocity range
//           vy: (Math.random() * 0.01) - 0.005, // Corrected velocity range
//           dia: Math.random() * 3 + 1
//         });
//       }
//       setPoints(newPoints);
//     };

//     // Initialize canvas and event listeners
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     drawPoints(); // Initialize points and drawing

//     window.addEventListener('resize', handleResize);
//     canvas.addEventListener('mousemove', handleMouseMove);

//     const interval = setInterval(pointFun, 30000); // Adjust animation speed

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       canvas.removeEventListener('mousemove', handleMouseMove);
//       clearInterval(interval);
//     };
//   }, [mousePos]); // Only include mousePos if needed

//   return (
//     <div className="relative h-screen w-screen overflow-hidden bg-black">
//       <div className="absolute flex items-center justify-end px-4 z-10">
//         {/* Optional content, like a title or controls */}
//       </div>
//       <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
//     </div>
//   );
// };

// export default Networking;
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faCogs,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Networking = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const mousePosRef = useRef(null);
  const maxDist = 200;
  const colour = "135,206,250"; // Sky Blue
  const [pointCount, setPointCount] = useState(260);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to handle canvas resize and adjust points
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setPointCount(window.innerWidth < 768 ? 3 : 360); // Adjust point count based on screen size
    };

    // Function to handle mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // Function to initialize and draw points
    const drawPoints = () => {
      generatePoints(pointCount); // Generates and initializes points based on screen size
      pointFun(); // Starts the drawing and animation loop
    };

    // Function to handle drawing and animation
    const pointFun = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mousePosRef.current) {
        collision(mousePosRef.current, maxDist * 2);
        draw(mousePosRef.current);
      }
      pointsRef.current.forEach((point) => {
        collision(point, maxDist);
        draw(point);
        update(point);
      });
    };

    // Function to draw a point
    const draw = (obj) => {
      ctx.beginPath();
      ctx.fillStyle = `rgb(${colour})`;
      ctx.arc(obj.x, obj.y, obj.dia || 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    };

    // Function to update a point's position
    const update = (obj) => {
      obj.x += obj.vx;
      obj.y += obj.vy;
      if (obj.x > canvas.width + maxDist / 2) obj.x = -(maxDist / 2);
      if (obj.x < -(maxDist / 2)) obj.x = canvas.width + maxDist / 2;
      if (obj.y > canvas.height + maxDist / 2) obj.y = -(maxDist / 2);
      if (obj.y < -(maxDist / 2)) obj.y = canvas.height + maxDist / 2;
    };

    // Function to handle collisions
    const collision = (obj, dist) => {
      pointsRef.current.forEach((p) => {
        if (obj !== p) {
          const temp = Math.sqrt(
            Math.pow(obj.x - p.x, 2) + Math.pow(obj.y - p.y, 2)
          );
          if (temp < dist) {
            ctx.beginPath();
            ctx.moveTo(obj.x, obj.y);
            ctx.strokeStyle = `rgba(${colour},${
              0.8 * Math.pow((dist - temp) / dist, 5)
            })`;
            ctx.lineTo(p.x, p.y);
            ctx.closePath();
            ctx.stroke();
          }
        }
      });
    };

    // Function to generate points
    const generatePoints = (amount) => {
      const newPoints = [];
      for (let i = 0; i < amount; i++) {
        newPoints.push({
          x: Math.random() * (canvas.width + maxDist) - maxDist / 2,
          y: Math.random() * (canvas.height + maxDist) - maxDist / 2,
          vx: Math.random() * 0.01 - 0.5,
          vy: Math.random() * 0.01 - 0.5,
          dia: Math.random() * 3 + 1,
        });
      }
      pointsRef.current = newPoints;
    };

    // Initialize canvas and event listeners
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawPoints(); // Initialize points and drawing

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(pointFun, 1000 / 60); // Adjust animation speed

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [pointCount]); // Depend on pointCount to update points when screen size changes

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          {/* Content Wrapper */}
          <div className="md:flex p-8 rounded-lg shadow-lg bg-black bg-opacity-50">
            <div className="md:flex-shrink-0">
              <img
                className="h-90 w-full object-cover md:w-90 opacity-50 rounded-lg"
                src="https://e0.pxfuel.com/wallpapers/679/344/desktop-wallpaper-network-connection-platform-world-global-gis-tavos.jpg"
                alt="Cybersecurity"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-cyan-500 font-semibold">
                New Course
              </div>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-cyan-400 sm:text-4xl">
                Advanced Networking
              </h1>
              <p className="mt-4 text-xl text-gray-300 leading-8">
                Explore the fundamentals and advanced concepts of networking.
                Gain hands-on experience with modern networking technologies,
                protocols, and tools. Join our course and become a networking
                expert.
              </p>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faNetworkWired}
                      className="h-6 w-6 text-cyan-500"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      Network Design and Architecture
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faCogs}
                      className="h-6 w-6 text-cyan-500"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      Configuration and Troubleshooting
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="h-6 w-6 text-cyan-500"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                      Network Performance Optimization
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/courses/networkingcourse"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-600 to-cyan-600 hover:from-cyan-700 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-150 ease-in-out"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        ></canvas>
      </div>
      <footer className="py-6 bg-gradient-to-b from-slate-900 to-black text-center text-gray-300">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Networking;
