import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day20() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 20: Dynamic Search Component</h2>
                <p>
                    Welcome to Day 20 of our coding challenge! Today, we've built an interactive search component that enhances user experience and navigation.
                </p>
                <p>
                    Here's what our search component brings to the table:
                </p>
                <ul>
                    <li>🔍 Instantly Toggleable: A compact search icon that expands into a full search bar with a simple click.</li>
                    <li>🧠 Smart Closure: The search bar automatically closes if clicked outside or if the user scrolls, keeping the UI clean.</li>
                    <li>⌨️ Quick Navigation: On pressing 'Enter', it directs the user to the search results. (This can be linked to any desired page or API endpoint).</li>
                    <li>🎨 Seamless Design: A sleek and minimal design that can easily blend into any website aesthetic.</li>
                </ul>
                <p>
                    With this component, users can easily find what they're looking for, be it products, articles, or any other content. The dynamic nature of the search bar ensures that it doesn't clutter the interface, only appearing when needed.
                </p>
                <p>
                    As we push forward with our challenge, we're integrating more advanced features and fine-tuning our user interface. Stay tuned for more innovations!
                </p>
                <ul>
                    <li>
                        <Link to={'/search'}>View Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day20" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
