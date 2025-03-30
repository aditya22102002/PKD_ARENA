import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './toast';

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password } = data
        if (!email || !password) {
            return handleError('All field are req')
        }
        try {
            const url = "http://localhost:4000/api/user/login";
            const response = await axios.post(url, data);
            console.log(response);
            const {token}=response.data
            const message = response.data.user.name
            const { status } = response
            if (status === 200) {
                handleSuccess(`Welcome Back! ${message}`)
                localStorage.setItem('token',token)
                localStorage.setItem('loggedInUser',message)
                setTimeout(() => {
                    
                    navigate('/')
                },3000)
            }
         } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                handleError('All field are req')
                setError(error.response.data.message);
            }
        }
    };

    const divStyle = {
        backgroundImage: `url(./bg1.png)`,
        backgroundSize: 'cover',
      };
      

    return (
        <div className="w-full min-h-screen flex items-center justify-center " style={divStyle}  >
            <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-xl shadow-lg shadow-violet-700/30  overflow-hidden">
                {/* Left Side */}
                <div className="md:w-1/2 flex flex-col items-center justify-center  text-white">
                    <img className="w-3/5 md:w-full " src="./login.jpg" alt="" />
                </div>

                {/* Right Side */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-100">
                <h1 className="text-4xl font-bold mb-4 mt-7">Log In</h1>
                    <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required />

                        <label htmlFor="password">Password:</label>
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
                        {error && setTimeout((
                            <div className="w-full p-3 bg-red-400 text-white text-center rounded-lg">{error}</div>
                        ),3000)}
                        <button type="submit" className="w-full py-3 text-lg font-semibold bg-violet-700 text-white rounded-lg shadow-md hover:bg-violet-900 hover:scale-110 cursor-pointer  transition">Log In</button>
                    </form>
                    <p className="text-lg mt-2 mb-6 text-center">Don't have an account? <Link to="/sign-up" className="w-full max-w-xs">
                        <span className="w-full py-3 text-lg font-semibold rounded-lg text-violet-700  underline transition cursor-pointer 
                        hover:text-violet-900 hover:text-xl">Sign Up</span>
                    </Link></p>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Login;
