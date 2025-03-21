import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <div className="h-screen flex items-center justify-start p-8 relative">
      <div>
        <h1 className="text-4xl font-semibold mb-4 relative z-10">
          EduQuizAI: Your Personalized Learning <span className='block'>Assistant Powered by AI</span>
        </h1>
        <button onClick={handleClick} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>

      {/* Floating boxes */}
      <div className="absolute top-10 right-10 bg-zinc-200 h-80 w-80"></div>
      <div className="absolute top-100 right-10 bg-zinc-200 h-80 w-80"></div>
      <div className="absolute top-40 right-100 bg-zinc-200 h-80 w-80"></div>
    </div>
  )
}

export default Home
