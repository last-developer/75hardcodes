import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day13() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 13: Building a Comment System</h2>
            <p>
                On Day 13, we've introduced a new and engaging feature to our web application – a Comment System. User engagement and interaction are crucial, and comments are a great way to facilitate that.
            </p>
            <p>
                Our Comment System allows users to post comments on various content sections, articles, or discussions. It's a seamless way for users to share their thoughts, ask questions, or provide feedback.
            </p>
            <p>
                Here's a glimpse of what we've accomplished:
            </p>
            <ul>
                <li>Create a Comment Input: We've designed a user-friendly comment input box that adjusts to various screen sizes for a consistent experience.</li>
                <li>Comments List: Users can view existing comments in a neatly organized list, with each comment displayed in a dedicated container.</li>
                <li>Responsiveness: The Comment System is responsive, ensuring it looks and works great on both desktop and mobile devices.</li>
            </ul>
            <p>
                It's a significant step forward in enhancing user engagement and interaction on our web application. Stay tuned for more features and improvements as we continue our coding challenge journey!
            </p>
            <ul>
                <li>
                    <Link to={'/comment'}>View Component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day13" target="_blank">View Code on GitHub</a>
                </li>
            </ul>
        </section>
    );
}
