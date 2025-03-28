import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
    const [data, setData] = useState({
        name: "",
        phone_number: "",
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
        try {
            const url = "http://localhost:4000/api/user/newUser";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200 p-4">
            <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Left Side */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-violet-500 text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
                    <p className="text-lg mb-6 text-center">Already have an account? Sign in now.</p>
                    <Link to="/login" className="w-full max-w-xs">
                        <button className="w-full py-3 text-lg font-semibold bg-orange-400 rounded-lg shadow-md hover:bg-amber-500 transition cursor-pointer hover:scale-105">Sign In</button>
                    </Link>
                </div>
                
                {/* Right Side */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-100">
                    <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
                        <h1 className="text-3xl font-bold text-center text-gray-800">Create Account</h1>
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="text" placeholder="Name" name="name" onChange={handleChange} value={data.name} required />
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="tel" placeholder="Mobile Number" name="phone_number" onChange={handleChange} value={data.phone_number} required />
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required />
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
                        {error && <div className="w-full p-3 bg-red-400 text-white text-center rounded-lg">{error}</div>}
                        <button type="submit" className="w-full py-3 text-lg font-semibold bg-violet-700 text-white rounded-lg shadow-md hover:bg-violet-900 hover:scale-110 cursor-pointer  transition">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
