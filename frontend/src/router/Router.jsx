import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Quiz } from '../pages/Quiz'


const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/quiz' element={<Quiz />} />
        </Routes>
    </div>
  )
}

export default Router