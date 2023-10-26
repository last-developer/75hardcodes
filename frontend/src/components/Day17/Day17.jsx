import React from 'react';
import '../Day.css';
import { Link } from 'react-router-dom';

export default function Day17() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 17: Integrating Stripe for Payments</h2>
                <p>
                    Welcome to Day 17 of our coding challenge! Today, we're diving into the world of online payments by integrating Stripe into our web application.
                </p>
                <p>
                    Our payment form enables users to securely make payments using their credit card. Stripe, a trusted payment processing platform, provides the infrastructure to handle payments efficiently and securely.
                </p>
                <p>
                    Our payment form features a responsive design and is built with Stripe's React components, making it user-friendly and visually appealing. Users can enter their payment information and make secure payments with ease.
                </p>
                <p>
                    We've configured the Stripe environment, added error handling, and ensured that payments are processed smoothly. Now, our web application is equipped to handle transactions, whether it's for products, services, or donations.
                </p>
                <p>
                    As we continue with our coding challenge, we're expanding the capabilities of our web application, providing a seamless experience for our users.
                </p>
                <ul>
                    <li>
                        <Link to={'/payment'}>Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day17" className="code-link" target="_blank">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
