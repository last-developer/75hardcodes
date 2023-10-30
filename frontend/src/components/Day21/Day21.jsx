import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day21() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 21: Frontend Pagination Component</h2>
                <p>
                    Welcome to Day 21 of our coding challenge! Today, we've meticulously crafted a pagination component for data-driven applications.
                </p>
                <p>
                    Key highlights of our pagination component:
                </p>
                <ul>
                    <li>📄 Five Products/Page: Ensuring information is digestible and the user experience remains smooth.</li>
                    <li>🔢 Dynamic Dots: When more than three pages are displayed, we utilize ellipses to maintain a clean layout.</li>
                    <li>⬅️➡️ Navigation Arrows: Effortless navigation between pages, enhancing usability.</li>
                    <li>🎨 User-Centric Design: The component's design caters to user-friendliness and easy integration into various projects.</li>
                </ul>
                <p>
                    Efficient pagination is essential for improving site navigation, enhancing user experience, and ensuring quick access to information. Our component achieves this beautifully, adapting to data loads while remaining visually appealing.
                </p>
                <p>
                    Our journey continues, and we're excited to keep bringing you the best in frontend development. Join us on this adventure!
                </p>
                <ul>
                    <li>
                        <Link to={'/pagination'}>View Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day21" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
