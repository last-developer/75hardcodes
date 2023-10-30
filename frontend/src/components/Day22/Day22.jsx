import React from 'react';
import '../Day.css';
import { Link } from 'react-router-dom';

export default function Day22() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 22: Backend Pagination Implementation</h2>
                <p>Welcome to Day 22 of our coding challenge! Today, we transitioned our frontend pagination from Day 21 to a backend-supported model to handle larger datasets effectively.</p>
                <p>Key enhancements in our new approach:</p>
                <ul>
                    <li>📤 Reduced Data Transfer: Fetch only what's needed for the current page.</li>
                    <li>⚡ Faster Load Times: Especially noticeable with large datasets.</li>
                    <li>🌐 Scalability: Easily handle thousands or millions of items.</li>
                    <li>💼 Business Logic: Move complex calculations to the backend, simplifying the frontend.</li>
                </ul>
                <p>Backend pagination is a cornerstone for any data-driven web application, ensuring speed, scalability, and an optimized user experience.</p>
                <ul>
                    <li>
                        <Link to={'/backendpagination'}>View Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/backend/src/routes/Day22" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
