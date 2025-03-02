import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Quiz from '../pages/Quiz'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'


const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default Router