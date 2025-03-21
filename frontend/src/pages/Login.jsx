import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-center text-gray-600 mb-6">Please login to your account.</p>

        <form action='/signup' className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email Address:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password:</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none"
              />
              <span className="absolute right-3 top-2.5 cursor-pointer">👁️</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">OR</div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 border rounded-full">G</button>
          <button className="p-2 border rounded-full">M</button>
          <button className="p-2 border rounded-full">X</button>
          <button className="p-2 border rounded-full">L</button>
        </div>

        <p className="text-center mt-4">
          Don't have an account? <Link to="/signup" className="font-bold hover:underline hover:text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
