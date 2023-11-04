import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SearchNgo from './pages/SearchNgo';
import UploadMed from './pages/UploadMed';
import NgoDetail from './pages/NgoDetail';

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
    
     <Route path='/' element={<Home/>}></Route>
     <Route path='/signin' element={<SignIn/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/uploadmed' element={<UploadMed/>}></Route>
     <Route path='/ngodetail' element={<NgoDetail/>}></Route>
     <Route path='/searchngo' element={<SearchNgo/>}></Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App