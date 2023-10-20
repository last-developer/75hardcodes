import React from 'react';
import '../Day.css'
import { Link } from 'react-router-dom';

export default function Day11() {
    return (
        <section className="day-container">
            <h2 className='day-header'>Day 11: Implement FAQ Component</h2>
            <p>
                Today, we've added an FAQ (Frequently Asked Questions) component to our web application. FAQs are essential for providing information and addressing common queries from users.
                Here's what we've done:
            </p>
            <ul>
                <li>
                    FAQ Component: We've created a user-friendly FAQ section to answer common questions about our service or product. Users can expand and collapse each question to find the answers they need.
                </li>
                <li>
                    Responsive Design: Just like our previous components, we've ensured that the FAQ component looks and functions beautifully on all screen sizes. Whether users are on desktop, tablet, or mobile, they can easily access and interact with the FAQ.
                </li>
                <li>
                    Custom Styling: We've applied custom CSS styles to make our FAQ component visually appealing and intuitive. The questions and answers are neatly organized for a pleasant user experience.
                </li>
            </ul>
            <p>
                The FAQ component enhances user engagement, reduces support requests, and provides clarity. As we continue to build our web application, we'll keep refining and expanding our components to deliver a top-notch experience to our users.
            </p>
            <ul>
                <li>
                    <Link to={'/faq'}>View component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day11" target='_blank'>View on GitHub</a>
                </li>
            </ul>
        </section>
    );
}