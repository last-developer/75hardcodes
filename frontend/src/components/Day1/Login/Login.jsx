import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Dummy code to simulate a successful login
        alert('Login Successful!');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <Avatar sx={{ m: 1, bgcolor: 'black' }} className='avatar'></Avatar>

                    <h1 className="login-header">Log in</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username*"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password*"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="login-button">
                            LOG IN
                        </button>
                    </form>
                    <div className="login-links">
                        <a
                            href="#"
                            onClick={() => {
                                navigate('/forgotpassword');
                            }}
                        >
                            Forgot password?
                        </a>
                        <a
                            href="#"
                            onClick={() => {
                                navigate('/signup');
                            }}
                        >
                            Don't have an account? Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}