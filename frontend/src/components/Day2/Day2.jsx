import React from 'react';
import '../Day.css';
import { Link } from 'react-router-dom';

export default function Day2() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 2: Signup & Reset Password Components</h2>
            <p>
                Welcome to Day 2 of our 75-day coding challenge! Today, we're diving into the creation of two essential components in webapps: <br />
                Signup and Password Reset.
            </p>
            <p>
                The Signup component allows users to create new accounts with a unique username, email address, and password.
                It's a critical step in the user journey for many web applications.
            </p>
            <p>
                Our Reset Password component provides a secure and straightforward way for users to reset their forgotten passwords.
                We'll guide users through the process, making it hassle-free.
            </p>
            <p>
                In both components, we'll use React's state management and form handling techniques to ensure a seamless user experience.
                We've also crafted responsive designs to make these components shine on any device.
            </p>
            <p>
                Remember, we're just getting started! As we progress through our coding challenge, we'll build even more fantastic web components.
                Stay tuned for the journey ahead.
            </p>
            <ul>
                <li>
                    <Link to={'/signup'}>Signup Component</Link>
                </li>
                <li>
                    <Link to={'/forgotpassword'}>Reset Password Component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day2" target='_blank'>Code</a>
                </li>
            </ul>
        </section>
    );
}