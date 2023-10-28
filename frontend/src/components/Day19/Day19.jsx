import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day19() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 19: Image Uploader with Cropping Functionality</h2>
                <p>
                    Welcome to Day 19 of our coding challenge! Today, we have crafted a versatile image uploader component with an added cropping capability.
                </p>
                <p>
                    Our component stands out due to its simplicity and effectiveness:
                </p>
                <ul>
                    <li>Step 1: Users select an image file using the built-in file picker.</li>
                    <li>Step 2: The chosen image is promptly displayed to the user.</li>
                    <li>Step 3: Users can then choose to crop their image, enhancing its framing and overall presentation.</li>
                    <li>Step 4: Upon applying the crop, the new cropped version seamlessly replaces the original, allowing for immediate feedback.</li>
                </ul>
                <p>
                    This component showcases the power of React and the benefits of integrating third-party libraries to achieve intricate functionalities. The cropping tool, powered by the 'react-easy-crop' library, offers a seamless user experience and guarantees quality results.
                </p>
                <p>
                    The component we've built today can be integrated into numerous applications, be it profile picture uploaders, content management systems, or any platform requiring image uploads with cropping abilities.
                </p>
                <p>
                    As our coding challenge continues, we delve deeper into the vast world of React development. Tomorrow holds another adventure. Stay coding, stay curious!
                </p>
                <ul>
                    <li>
                        <Link to={'/imageuploader'}>View Component</Link>
                    </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day19" className="code-link" target="_blank" rel="noopener noreferrer">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
