import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/SignUpCon.css'

const ReceiverSignupCon = () => {
    const navigate = useNavigate();
  
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState(''); // State to hold selected location
    const [receiverType, setReceiverType] = useState('');
  
    const maharashtraDistricts = [
      "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed",
      "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli",
      "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur",
      "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded",
      "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani",
      "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara",
      "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim",
      "Yavatmal"
    ];
  
    const receivers = ["NGO","Hospital"]
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    async function register(e) {
      if(name=='' ||email==''||password==''||location==''||receiverType==''){
        toast.error("Plz Enter valid details");
        return ;
      }

      e.preventDefault();
      const res = await fetch("http://localhost:2000/receiver/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, email, password, location, receiverType
        })
      });
  
      const data = await res.json();
      if (res.status === 200) {
        toast.success("Registered Successfully 💫");
        navigate("/receiver/signin", { replace: true });
      } 
      else if (res.status === 400) {
        toast.error("User already registered");
      } 
      else {
        toast.error("Oops !! Something Went Wrong ");
      }
      console.log(data);
    }
  
    return (
      <div>
        <div className="flex flex-row flex-wrap">
          <div className="sm:w-1/2 sm:h-[90vh]" style={{ backgroundColor: "#1CB5BD" }}>
            <img
              src={require("../assets/signup.png")}
              className="sign-img sm:w-11/12 my-12"
              alt="Signup"
            />
          </div>
  
          <div className="sm:w-1/2 flex justify-center">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-0 text-left text-5xl font-bold leading-9 tracking-tight text-gray-900">
                  Welcome
                </h2>
              </div>
  
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div className="flex sm:flex flex:nowrap sm:wrap">
                    {/* First Name and Last Name input fields */}
                    {/* Email input field */}
                    {/* Password input field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lg font-bold leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2 me-5">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Enter Name"
                          required
                          className="block w-full text-lg font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                          style={{ borderColor: "#98B3D6" }}
                          value={name} onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
  
                
                  </div>
  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-bold leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2 ">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter Your Address"
                        required
                        className="block w-full text-lg font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                        value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
  
  
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-lg font-bold leading-6 text-gray-900"
                      >
                        Create Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          placeholder="Enter Password"
                          required
                          className="block w-full text-lg font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                          style={{ borderColor: "#98B3D6" }}
                          value={password} onChange={(e) => setPassword(e.target.value)}
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
                    <label
                      htmlFor="location"
                      className="block text-lg font-bold leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <select
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="block w-full text-lg font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                      >
                        <option value="" className="text-gray-400">Enter Your Location</option>
                        {maharashtraDistricts.map((district, index) => (
                          <option key={index} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
  
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-lg font-bold leading-6 text-gray-900"
                    >
                      Receiver Type
                    </label>
                    <div className="mt-2">
                      <select
                        id="location"
                        name="location"
                        value={receiverType}
                        onChange={(e) => setReceiverType(e.target.value)}
                        required
                        className="block w-full text-lg font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                      >
                        <option value="" className="text-gray-400">Select receiver type</option>
                        {receivers.map((donor, index) => (
                          <option key={index} value={donor}>
                            {donor}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
  
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-full px-3 py-1.5 text-lg font-bold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ backgroundColor: "#1CB5BD" }}
                      onClick={register}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
  
                <p className="mt-2 text-center font-bold py-4 text-sm text-gray-500">
                  Already a member?{" "}
                  <a
                    href="/donor/signin"
                    className="font-semibold leading-6  cursor-pointer"
                    style={{ color: "#1CB5BD" }}
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ReceiverSignupCon