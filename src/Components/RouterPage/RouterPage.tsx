import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import LandingPage from '../LandingPage/LandingPage'

import Home from '../Home/Home'
import Signin from '../Signin/Signin'
import Register from '../Signin/Register'
import Details from '../Details/Details'
import Contact from '../../Contact/Contact'
import Genre from '../Genre/Genre'





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
          <Route path='/details/:id' element={<Details/>}></Route>
       <Route path='/contact' element={<Contact/>} > </Route>
       <Route path='/genre' element={<Genre/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterPage