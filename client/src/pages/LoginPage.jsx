// import React, { useState } from 'react';
// import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//     if (errors[name]) {
//       setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//       isValid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form submitted:', formData);
//       setFormData({
//         email: '',
//         password: ''
//       });
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div className="mb-4">
//               <label htmlFor="email-address" className="sr-only">Email address</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className={`appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border ${errors.email ? 'border-red-500' : 'border-gray-600'} placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
//                   placeholder="Email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   className={`appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border ${errors.password ? 'border-red-500' : 'border-gray-600'} placeholder-gray-500 text-white bg-gray-700 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                   <button
//                     type="button"
//                     className="text-gray-400 hover:text-gray-300 focus:outline-none"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                   </button>
//                 </div>
//               </div>
//               {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign In
//             </button>
//           </div>
//           <div className="flex items-center justify-between">
//             <p className="text-sm text-gray-400">Don't have an account?</p>
//             <Link to="/signup" className="text-sm text-indigo-400 hover:text-indigo-500">Sign Up</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', { email, password });
      // Handle form submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-900 to-black bg-pattern">
      <div className="w-full max-w-md p-8 space-y-8 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-300">Log in to your coding sanctuary</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-700 placeholder-gray-500 text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            >
              Log in
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-400 hover:text-blue-500">Forgot your password?</a>
          </div>
          <div className="text-sm">
            {/* <a href="#" className="font-medium text-blue-400 hover:text-blue-500">Sign up</a> */}
            <Link to="/signup" className="text-sm text-indigo-400 hover:text-indigo-500">Sign Up</Link>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center">
        <p className="text-gray-400 mb-4">Connect with us</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaGithub className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
