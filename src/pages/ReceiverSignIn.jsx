import React from 'react'
import ReceiverSignInLeft from '../Components/ReceiverSignInLeft'

const ReceiverSignIn = () => {
    return (
        <div>
          <div>
            <h1 className='text-3xl font-bold px-20 my-4 py-2'><span style={{color:"#1CB5BD"}}>Medi</span>Share</h1>
          </div>
          <ReceiverSignInLeft></ReceiverSignInLeft>
        </div>
      )
}

export default ReceiverSignIn