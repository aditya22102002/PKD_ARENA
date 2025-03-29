import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { loginUser } from '../features/authSlice';

function SignIn() {

    const { isAuthenticated } = useSelector((state) => state.user);
    console.log(isAuthenticated);

    const dispatch = useDispatch();

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
        dispatch(loginUser(data));
        // try {
        //     const url = "http://localhost:4000/api/user/login";
        //     const response = await axios.post(url, data);
        //     console.log(response.data);
        //     localStorage.setItem("token",response.data.token);
        //     navigate("/");
        //     console.log(res.message);
        // } catch (error) {
        //     if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        //         setError(error.response.data.message);
        //     }
        // }
    };
    
    useEffect(() => {
        if(isAuthenticated){
            navigate("/");
        }
    },[isAuthenticated,navigate]);

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-200 to-violet-200 p-4">
            <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Left Side */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-violet-400 text-white">
                    <h1 className="text-4xl font-bold mb-4">New Here?</h1>
                    <p className="text-lg mb-6 text-center">Create an account to get started.</p>
                    <Link to="/signup" className="w-full max-w-xs">
                        <button className="w-full py-3 text-lg font-semibold bg-orange-400 rounded-lg shadow-md hover:bg-amber-500 hover:scale-105 cursor-pointer transition">Sign Up</button>
                    </Link>
                </div>
                
                {/* Right Side */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-6 bg-gray-100">
                    <form className="w-full max-w-xs space-y-4" onSubmit={handleSubmit}>
                        <h1 className="text-3xl font-bold text-center text-gray-800">Log In</h1>
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="email" placeholder="Email" name="email" onChange={handleChange} value={data.email} required />
                        <input className="w-full p-3 rounded-lg bg-white shadow-sm border focus:ring-2 focus:ring-indigo-400 focus:outline-none" type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
                        {error && <div className="w-full p-3 bg-red-400 text-white text-center rounded-lg">{error}</div>}
                        <button type="submit" className="w-full py-3 text-lg font-semibold bg-violet-700 text-white rounded-lg shadow-md hover:bg-violet-900 hover:scale-105 cursor-pointer  transition">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
