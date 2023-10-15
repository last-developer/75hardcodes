import React from 'react';
import '../Day.css';
import { Link } from 'react-router-dom';

export default function Day6() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 6: Contact Us Form</h2>
            <p>
                Welcome to Day 6 of our 75-day coding challenge! Today, we'll create a "Contact Us" form component.
                This essential feature allows users to reach out to your team, providing valuable feedback, inquiries,
                and support requests.
            </p>
            <p>
                The "Contact Us" form includes fields for the user's name, email, subject, and message. With the help of
                React state and event handling, we capture the user's input as they fill out the form.
            </p>
            <p>
                When the user submits the form, the data can be sent to your server for processing or stored in your
                preferred way. In this example, we log the form data to the console and display a submission confirmation.
            </p>
            <p>
                The component is designed to be responsive and user-friendly, ensuring a seamless experience on various
                devices and screen sizes. Try it out and let us know how you feel about our 75-day challenge!
            </p>
            <ul>
                <li>
                    <Link to={'/contactus'}>Component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day6/ContactUs" className="code-link" target="_blank">View the Code</a>
                </li>
            </ul>
        </section>
    );
}
