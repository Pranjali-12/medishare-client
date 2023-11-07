import "../styles/SignInLeft.css";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const SignUpCon = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFname] = useState('');
  const [lastName, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const location = "Thane"
  const donorType = "Individual"

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function register(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:2000/donor/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName, lastName, email, password, location, donorType
      })
    })

    const data = await res.json()
    if (res.status === 200) {
      toast.success("Registered Successfully 💫")
      navigate("/signin", { replace: true });
    }
    else{
      toast.error("Oops !! Something Went Wrong ")
    }

    console.log(data);

  }

  return (
    <div>
      <div className="flex flex-row flex-wrap ">
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
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-bold leading-6 text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="mt-2 me-5">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        placeholder="Enter First Name"
                        required
                        className="block w-full text-lg font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                        value={firstName} onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-bold leading-6 text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="lastName"
                        placeholder="Enter Last Name"
                        required
                        className="block w-full text-lg font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                        value={lastName} onChange={(e) => setLname(e.target.value)}
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
                        type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
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
                      htmlFor="email"
                      className="block text-sm font-bold leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        id="location"
                        name="location"
                        type="text"
                        autoComplete="location"
                        placeholder="Enter Location"
                        required
                        className="block w-full text-sm font-semibold border-b py-1.5 text-gray-900 placeholder:text-gray-400 outline-none"
                        style={{ borderColor: "#98B3D6" }}
                      />
                    </div>
                  </div>
                
                <div className="mt-2">
                  <label className="flex w-full text-xs font-bold  text-gray-500 outline-none">
                    <input type="checkbox" />
                    <h6 className="mx-2">
                      {" "}
                      By signing up, you agree to our Terms & Conditions
                    </h6>
                  </label>
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
                  href="/signin"
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

export default SignUpCon;