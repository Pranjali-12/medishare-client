import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SearchNgo from './pages/SearchNgo';
import UploadMed from './pages/UploadMed';
import NgoDetail from './pages/NgoDetail';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MedicineList from './pages/MedicineList';
import RecMedList from './pages/RecMedList';
import SingleMed from './pages/SingleMed';
import AllReqMed from './pages/AllReqMed';
import ReceiverSignup from './pages/ReceiverSignup';
import ReceiverSignIn from './pages/ReceiverSignIn';
import AdminApproval from './pages/AdminApproval';
import Admin from './pages/Admin';


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
    
     <Route path='/' element={<Home/>}></Route>
     <Route path='/donor/signin' element={<SignIn/>}></Route>
     <Route path='/donor/signup' element={<SignUp/>}></Route>
     <Route path='/uploadmed' element={<UploadMed/>}></Route>
     <Route path='/ngodetail' element={<NgoDetail/>}></Route>
     <Route path='/searchngo' element={<SearchNgo/>}></Route>
     <Route path='/medlist' element={<MedicineList/>}></Route>
     <Route path='/reciever/recmedlist' element={<RecMedList/>}></Route>
     <Route path="reciever/recmedlist/:id" element={<SingleMed/>}></Route>
     <Route path='/reciever/allreqmed' element={<AllReqMed/>}></Route>

    
     <Route path='/receiver/signup' element={<ReceiverSignup/>}></Route>
     <Route path='/receiver/signin' element={<ReceiverSignIn/>}></Route>

     <Route path='/admin' element={<Admin/>}></Route>
     <Route path='/admin/medicine-approval' element={<AdminApproval/>}></Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App