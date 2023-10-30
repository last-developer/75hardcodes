import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day24() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 24: Drag & Drop List Reordering</h2>
                <p>
                    Welcome to Day 24 of our coding challenge! Today, we've ventured into one of the most interactive and user-friendly UI features: a drag and drop component for list reordering.
                </p>
                <p>
                    Here's what this component offers:
                </p>
                <ul>
                    <li>🔀 Seamless Reordering: Users can easily rearrange items in the list just by dragging and dropping them.</li>
                    <li>👁️ Visual Feedback: The dragged item changes its appearance to indicate it's being moved, providing intuitive visual feedback.</li>
                    <li>📐 Responsive Design: Adapts to various screen sizes, ensuring an optimal experience across devices.</li>
                    <li>🛠️ Modular Code: Written with reusability in mind, making it simple to integrate into any project.</li>
                </ul>
                <p>
                    With the growing emphasis on intuitive user experiences, drag and drop interactions are becoming increasingly prevalent. Such features enhance usability and are a delightful addition to any web app or site.
                </p>
                <p>
                    As we continue our journey, more advanced UI components and techniques await. Keep coding, and stay tuned for more!
                </p>
                <ul>
                    <li>
                        <Link to={'/dragdrop'}>View Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day24" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
