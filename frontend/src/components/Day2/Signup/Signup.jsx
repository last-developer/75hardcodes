import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './Signup.css';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Dummy code to simulate a successful login
        alert('Signup Successful!');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div className="signup-container">
                <div className="signup-form">
                    <Avatar sx={{ m: 1, bgcolor: 'black' }} className='avatar'></Avatar>

                    <h1 className="signup-header">Sign Up</h1>
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
                        <button type="submit" className="signup-button">
                            SIGN UP
                        </button>
                    </form>
                    <div className="signup-links">
                       
                        <a
                            href="#"
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Already have an account? Sign In
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}