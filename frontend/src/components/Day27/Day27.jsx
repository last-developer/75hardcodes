// Day27.jsx
import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day27() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 27: Custom Weather Widget</h2>
                <p>
                    For Day 27, we're excited to showcase our custom Weather Widget! It's been carefully crafted to bring real-time weather updates to our dashboard.
                </p>
                <p>
                    Feature highlights of our Weather Widget:
                </p>
                <ul>
                    <li>🌦️ Live Weather Data: Get the latest temperature, humidity, and forecasts based on your location.</li>
                    <li>📊 Dynamic Charts: Visualize temperature changes throughout the day with interactive charts.</li>
                    <li>📍 Location Input: Simply enter latitude and longitude to receive localized weather updates.</li>
                    <li>🌐 API Integration: Utilizes Open-Meteo API for up-to-date and accurate weather information.</li>
                </ul>
                <p>
                    Our Weather Widget is more than just a display; it's a tool for planning your day, preparing for changes in weather, and staying informed with just a glance.
                </p>
                <p>
                    Dive into the code or try out the widget yourself and experience the convenience and power of having weather insights at your fingertips!
                </p>
                <ul>
                    <li>
                        <Link to={'/weatherwidget'}>Try the Weather Widget</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day27" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}