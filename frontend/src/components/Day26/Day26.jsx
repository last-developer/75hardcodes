// Day26.jsx
import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day26() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 26: Interactive Dashboard with Real Charts</h2>
                <p>
                    Welcome to Day 26 of our coding challenge! Today, we've implemented an interactive dashboard with real-time data visualization.
                </p>
                <p>
                    Let’s take a look at the features of our Dashboard:
                </p>
                <ul>
                    <li>📈 Real Charts: Integrated Chart.js to display real-time data with beautiful line and bar charts.</li>
                    <li>🔧 Customizable Widgets: Users can easily add, remove, or rearrange dashboard widgets to fit their needs.</li>
                    <li>🎚️ Responsive Design: Fully responsive layout that looks great on both desktop and mobile devices.</li>
                    <li>🌟 Interactive Elements: Widgets include interactive elements for better user engagement and data exploration.</li>
                </ul>
                <p>
                    This dashboard is designed to give users the power to monitor key metrics at a glance and make informed decisions quickly.
                </p>
                <p>
                    Join us as we dive deeper into creating components that not only look good but are powerful in functionality. Keep an eye out for the next steps on this exciting development journey!
                </p>
                <ul>
                    <li>
                        <Link to={'/customizabledashboard'}>View Dashboard</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day26" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
