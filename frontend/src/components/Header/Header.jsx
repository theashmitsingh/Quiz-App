import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="">
      <div className=" flex justify-between items-center p-4 border-b-2 border-cyan-100">
        {/* Logo on the left */}
        <div className="text-2xl font-bold ml-15">EduQuizAI</div>

        {/* Nav links in the center */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-14 text-md font-semibold">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
            <li><Link to="/company" className="hover:text-red-500">Company</Link></li>
          </ul>
        </nav>

        {/* Login button on the right */}
        <div>
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 mr-15 text-white py-2 px-4 rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
