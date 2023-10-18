import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

export default function NotificationTemplate() {
    const showToast = () => {
        toast.success('This is a success notification!', {
            position: 'top-right', // Set the position of the notification
            autoClose: 3000, // Auto-close the notification after 3 seconds
            hideProgressBar: false, // Display the progress bar
            closeOnClick: true, // Close the notification when clicked
            pauseOnHover: true, // Pause auto-close on hover
            draggable: true, // Make the notification draggable
        });
    };

    // Function to display an error notification
    const showErrorNotification = () => {
        toast.error('An error occurred. Please try again later.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    return (
        <section>
            <h1>Day 9: Notification with react-toastify</h1>
            <br />
            <button onClick={showToast} className='globalbtn'>Success Notification</button>
            <br />
            <br />
            <button onClick={showErrorNotification} className="globalbtn">Error Notification</button>
        </section>
    );
}
