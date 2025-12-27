import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import LandingPage from '../LandingPage/LandingPage'

import Home from '../../Home/Home'
import Signin from '../../Signin/Signin'
import Register from '../../Signin/Register'



const RouterPage:React.FC = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
             <Route path='/home' element={<Home />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterPage