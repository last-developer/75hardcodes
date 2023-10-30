import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day23() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 23: Date & Time Picker</h2>
                <p>
                    On Day 23 of our coding challenge, we focused on creating an intuitive and user-friendly Date & Time Picker.
                </p>
                <p>
                    Features of our Date & Time Picker:
                </p>
                <ul>
                    <li>📅 Date Selector: Enables users to conveniently select any date from a calendar popup.</li>
                    <li>⏰ Time Selector: Allows users to set the desired time down to the minute.</li>
                    <li>🎨 Sleek Design: A minimalist design ensuring ease of integration into any web application.</li>
                    <li>🔁 Auto Populate: Default to the current date and time, offering a seamless user experience.</li>
                </ul>
                <p>
                    This component is essential for applications requiring scheduling, reminders, or any date-time specific features. As we progress in our challenge, we'll be exploring more advanced components and refining our existing ones.
                </p>
                <ul>
                    <li>
                        <Link to={'/datetimepicker'}>View Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day23" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
