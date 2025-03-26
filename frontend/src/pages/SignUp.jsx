import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target; 
    // console.log(name, value);

    const copySignupInfo = { ...signupInfo };
    console.log(name+" " + value)
    copySignupInfo[name] = value;

    setSignupInfo(copySignupInfo);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
        const { name, email, password,confirmPassword } = signupInfo;
        const data ={
          name: name,
          email:email,
          password:password
        }
        console.log(data);
        if (!name || !email || !password || !confirmPassword) {
            alert("Some fields are missing");
        }
        try {
            const url = "http://localhost:3000/api/v1/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                console.log(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                alert(details);
            } else if (!success) {
                alert(message);
            }
            console.log(result);
        } catch (err) {
            alert(err);
        }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">SignUp</h1>
        <p className="text-center text-gray-600 mb-6">Please enter your details below</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none"
              name="name"
              onChange={handleChange}
              value={signupInfo.name}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email Address:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name='email'
              className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none"
              onChange={handleChange}
              value={signupInfo.email}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password:</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Your Password"
                name='password'
                className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none"
                onChange={handleChange}
                value={signupInfo.password}
                required
              />
              <span className="absolute right-3 top-2.5 cursor-pointer">👁️</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="font-bold hover:underline hover:text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
