import React, { useState } from 'react'
import '../styles/SignInLeft.css'
import { useNavigate } from 'react-router-dom'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import toast from 'react-hot-toast';

const SignInLeft = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function login(e) {
    e.preventDefault();
    if(email==="admin@gmail.com" && password==="admin123"){
      toast.success('Login Successful !')
      navigate("/admin", { replace: true });
      return ;
    }
    const res = await fetch("http://localhost:2000/donor/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,password
      })
    })
    const data = await res.json()
    localStorage.setItem('authtoken', data.token)

    if (res.status === 200) {
      toast.success('Login Successful !')
      navigate("/donor", { replace: true });
    }
    else if(email=="" || password==""){
      toast.error("Plz Enter Credentials !!")
    }
    else{
      toast.error("Enter Correct Credentials !! ")
    }

    console.log(data);

  }

  return (
    <>
    
    <div className='flex flex-row flex-wrap ' >
        <div className='sm:w-1/2 sm:h-[90vh]'  style={{backgroundColor:"#1CB5BD"}}>
           <img src={require("../assets/signup.png")} className='sign-img sm:w-11/12 my-12'></img>
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
          
            <div>
              <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Enter Your Email Address'
                  required
                  className="block w-full text-lg font-semibold border-b  py-1.5 text-gray-900   placeholder:text-gray-400 outline-none" style={{borderColor:"#98B3D6"}}
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-lg font-semibold leading-6 text-gray-900">
                  Password
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
            {/* <div className="text-lg">
                  <a href="#" className="font-semibold hover:text-teal-800 text-teal-600">
                    Forgot password?
                  </a>
                </div> */}
            <div>
              <button
                type="submit"
                onClick={login}
                className="flex w-full justify-center rounded-full  px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " style={{backgroundColor:"#1CB5BD"}}
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-2 text-center font-bold py-4 text-sm text-gray-500">
            New member?{' '}
            <a href="/donor/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" style={{color:"#1CB5BD"}}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
        </div>


    </div>
    </>
  )
}

export default SignInLeft
