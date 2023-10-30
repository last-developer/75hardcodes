import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day25() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 25: File Dropzone Component</h2>
                <p>
                    Welcome to Day 25 of our coding challenge! Today, we've built a dynamic file dropzone component.
                </p>
                <p>
                    Here's what our File Dropzone component brings to the table:
                </p>
                <ul>
                    <li>📁 Drag & Drop: Seamlessly drag a file from your system and drop it right into the website.</li>
                    <li>🖱️ Click to Upload: Alternatively, click on the dropzone to select a file using the file picker dialog.</li>
                    <li>🖼️ Immediate Feedback: Once a file is uploaded, the component provides instant feedback by displaying the file name.</li>
                    <li>🎨 Aesthetic Design: A sleek and intuitive design that's easy for users and makes uploads a breeze.</li>
                </ul>
                <p>
                    With this component, users can effortlessly upload files, whether it's images, documents, or any other types of files. The versatility of both drag-and-drop and click-to-upload ensures a user-friendly experience.
                </p>
                <p>
                    As we continue our journey, we're focusing on user-centric components that enhance UI and UX. Stay tuned for more components and innovations!
                </p>
                <ul>
                    <li>
                        <Link to={'/filedropzone'}>View Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day25" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
