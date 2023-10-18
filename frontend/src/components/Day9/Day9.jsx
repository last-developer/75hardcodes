import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day9() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 9: Adding Notifications with react-toastify</h2>
            <p>
                Welcome to Day 9 of our 75-day coding challenge! Today, we'll be adding notifications to our React application using the <code>react-toastify</code> library. Notifications are a great way to provide feedback or alerts to users in a non-intrusive and visually appealing manner.
            </p>
            <p>Here's what we'll cover today:</p>
            <ul>
                <li>
                    <strong>Setting up react-toastify:</strong>
                    <br />
                    First, we'll import the <code>react-toastify</code> library and its styles. Make sure you have it installed in your project by running: <code>npm install react-toastify</code> and then import its CSS.
                </li>
                <li>
                    <strong>Creating Success Notifications:</strong>
                    <br />
                    We'll create a function <code>showSuccessNotification</code> that displays a success notification when a button is clicked. You can customize the notification properties like position, auto-close duration, and more.
                </li>
                <li>
                    <strong>Creating Error Notifications:</strong>
                    <br />
                    Similarly, we'll create another function <code>showErrorNotification</code> that displays an error notification. This function will be triggered by another button.
                </li>
                <li>
                    <strong>User Interaction:</strong>
                    <br />
                    We'll add two buttons to the component: one for showing success notifications and the other for error notifications. You can use these functions to display notifications at appropriate times in your application.
                </li>
                <li>
                    <strong>Customize as Needed:</strong>
                    <br />
                    Feel free to customize the notifications to match your application's style and branding. You can adjust the appearance, duration, and behavior of notifications to suit your requirements.
                </li>
            </ul>
            <p>
                Adding notifications to your React application can significantly enhance the user experience, making it easier to communicate important information, success messages, or error alerts. <code>react-toastify</code> provides a convenient way to achieve this with minimal effort.
            </p>
            <p>Stay tuned for more exciting challenges as we continue to build and improve our coding skills! Happy coding!</p>
            <ul>
                <li>
                    <Link to={'/notification'}>View component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day9" target='_blank'>View on GitHub</a>
                </li>
            </ul>
        </section>
    );
}
