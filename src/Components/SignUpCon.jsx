// import React from 'react'

// const SignUpCon = () => {
//   return (
//     <div>
//          <div className='flex flex-row flex-wrap ' >
//         <div className='sm:w-1/2  py-20 px-12 '  style={{backgroundColor:"#1CB5BD"}}>
//            <img src={require("../assets/signup.png")} className='sign-img sm:w-11/12 my-12'></img>
//         </div>


//         <div className='sm:w-1/2 flex justify-center'>
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
//           <h2 className="mt-5 text-left text-5xl font-bold leading-9 tracking-tight text-gray-900">
//             Welcome
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
          
//           <div className='flex sm:flex flex:nowrap sm:wrap'>
//           <div>
//               <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
//                 First Name
//               </label>
//               <div className="mt-2 me-5">
//                 <input
//                   id="fname"
//                   name="fname"
//                   type="text"
//                   autoComplete="fname"
//                   placeholder='Enter First Name'
//                   required
//                   className="block w-full   text-sm font-semibold border-b  py-1.5 text-gray-900   placeholder:text-gray-400 outline-none" style={{borderColor:"#98B3D6"}}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
//               Last Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="lname"
//                   name="lname"
//                   type="text"
//                   autoComplete="lname"
//                   placeholder='Enter Last Name'
//                   required
//                   className="block w-full text-sm font-semibold border-b  py-1.5 text-gray-900   placeholder:text-gray-400 outline-none" style={{borderColor:"#98B3D6"}}
//                 />
//               </div>
//             </div>
//           </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2 ">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   placeholder='Enter Your Address'
//                   required
//                   className="block w-full text-sm font-semibold border-b  py-1.5 text-gray-900   placeholder:text-gray-400 outline-none" style={{borderColor:"#98B3D6"}}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
//                   Create Password
//                 </label>
               
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   placeholder='Enter Password'
//                   required
//                   className="block w-full text-sm font-semibold  border-b  py-1.5 text-gray-900   placeholder:text-gray-400 outline-none" style={{borderColor:"#98B3D6"}}
//                 />
//               </div>
//             </div>
//             <div className="text-sm">
//                   <a href="#" className="font-semibold hover:text-teal-800 text-teal-600">
//                     Forgot password?
//                   </a>
//                 </div>
//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-full  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " style={{backgroundColor:"#1CB5BD"}}
//               >
//                 Login
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center font-bold py-4 text-xl text-gray-500">
//             New member?{' '}
//             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" style={{color:"#1CB5BD"}}>
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//         </div>


//     </div>
//     </div>
//   )
// }

// export default SignUpCon
import '../styles/SignInLeft.css'
import {  Link } from "react-router-dom";



import React, { useState } from 'react';
import {FaEyeSlash,FaEye} from 'react-icons/fa';

const SignUpCon = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className='flex flex-row flex-wrap '>
        <div className='sm:w-1/2 py-20 px-12' style={{ backgroundColor: "#1CB5BD" }}>
          <img src={require("../assets/signup.png")} className='sign-img sm:w-11/12 my-12' alt="Signup" />
        </div>

        <div className='sm:w-1/2 flex justify-center'>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-5 text-left text-5xl font-bold leading-9 tracking-tight text-gray-900">
                Welcome
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div className='flex sm:flex flex:nowrap sm:wrap'>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
                      First Name
                    </label>
                    <div className="mt-2 me-5">
                      <input
                        id="fname"
                        name="fname"
                        type="text"
                        autoComplete="fname"
                        placeholder='Enter First Name'
                        required
                        className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="lname"
                        name="lname"
                        type="text"
                        autoComplete="lname"
                        placeholder='Enter Last Name'
                        required
                        className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2 ">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder='Enter Your Address'
                      required
                      className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                      style={{ borderColor: "#98B3D6" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
                      Create Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                        autoComplete="current-password"
                        placeholder='Enter Password'
                        required
                        className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                      />
                      <span
                        className="absolute right-3 top-2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                         {showPassword ? (
                 <FaEyeSlash></FaEyeSlash>
                ) : (
                  <FaEye></FaEye>
                )}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ backgroundColor: "#1CB5BD" }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="mt-2 text-center font-bold py-4 text-sm text-gray-500">
                Already a member?{' '}
             
                <a  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" style={{ color: "#1CB5BD" }}>
                  Login
                </a>
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpCon;
