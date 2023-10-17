import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day8() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 8: Update User Profile</h2>
            <p>
                On Day 8, we've implemented exciting new features and made some important updates to our user profile.
                Here's what's new:
            </p>
            <ul>
                <li>**Enhanced User Profile**: We've added the ability for users to edit their profile picture. Now, you can click on the pencil icon next to your profile picture, choose an image from your computer, and update your profile image with ease.</li>
                <li>**Delete Account Feature**: For improved user control, we've also introduced a "Delete Account" button. If you decide to move on or create a new account, you can now delete your existing account with a simple click.</li>
                <li>**Responsive Design**: We've continued to focus on responsive design, ensuring that our project looks and works great on various screen sizes. Your experience is now optimized, whether you're on a desktop or a mobile device.</li>
            </ul>
            <p>
                We're committed to making our project user-friendly and feature-rich. Stay tuned for more updates as we keep enhancing our web application.
            </p>
            <ul>
                <li>
                    <Link to={'/userprofile'}>View User Profile</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day7/UserProfile" target='_blank'>View on GitHub</a>
                </li>
            </ul>
        </section>
    );
}
