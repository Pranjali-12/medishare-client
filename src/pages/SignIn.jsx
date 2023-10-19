import React from 'react'
import SignInLeft from '../Components/SignInLeft'

const SignIn = () => {
  return (
    <div>
      <div>
        <h1 className='text-3xl font-bold px-20 my-4 py-2'><span style={{color:"#1CB5BD"}}>Medi</span>Share</h1>
      </div>
      <SignInLeft></SignInLeft>
    </div>
  )
}

export default SignIn