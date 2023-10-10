import React from 'react';
import './Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day1() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 1: Login Component</h2>
            <p>
                In Day 1 of our coding challenge, we will explore the implementation of a login component in React.
                A login component is a fundamental part of many web applications, allowing users to securely access
                their accounts.
            </p>
            <p>
                The login component consists of three input fields: "Username," "Email Address," and "Password."
                Users are required to enter their credentials into these fields to log in.
            </p>
            <p>
                To create this component, we use React hooks like `useState` and `useNavigate` for handling form data
                and navigation, respectively. We also implement form validation by setting the `required` attribute on
                the input fields.
            </p>
            <p>
                When a user submits the form, a dummy function simulates a successful login, displaying an alert
                message. In a real application, this function would communicate with a server to authenticate the user.
            </p>
            <p>
                We've applied responsive CSS to ensure the component looks good on various screen sizes. The CSS styles
                define the layout, font sizes, and spacing for a clean and user-friendly login form.
            </p>
            <p>
                This is just the beginning of our 75-day coding challenge. Stay tuned for more exciting coding exercises
                as we continue to improve our skills and build useful web components!
            </p>
            <ul>
                <li>
                    <Link to={'/login'}>Component</Link>
                </li>
                <li>
                    <a href="https://lastdeveloper.in">code</a>
                </li>
            </ul>
        </section>
    );
}
