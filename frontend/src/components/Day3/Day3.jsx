import React from 'react';
import '../Day.css'; 
import { Link } from 'react-router-dom';

export default function Day3() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 3: Feedback Form Component</h2>
            <p>
                On Day 3, we're diving into creating a Feedback Form component using React. Gathering user feedback is
                essential for improving your applications, and a well-designed feedback form can make it easy for users
                to provide their thoughts.
            </p>
            <p>
                Our Feedback Form includes fields for users to enter their name, email, and feedback message. We've also
                added a "Rate Your Experience" section, allowing users to express their satisfaction using a star
                rating system.
            </p>
            <p>
                This form is not just about collecting feedback; it's also a way to learn about handling form submissions,
                utilizing state management, and making user interfaces more interactive. When users submit their feedback,
                we simulate sending the data to a server and clear the form fields.
            </p>
            <p>
                In addition, the star rating component is built with Material-UI's `Rating` component, and the stars are
                customized to have a sleek yellow color for a modern and engaging user experience.
            </p>
            <p>
                As always, you can access the source code for this component on GitHub to explore and use it in your
                projects. Stay tuned for more exciting challenges as we continue this coding journey!
            </p>
            <ul>
                <li>
                    <Link to={'/feedback'}>Try the Feedback Form</Link>
                </li>
                <li>
                    <a
                        href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day3/FeedbackForm"
                        target='_blank'
                    >
                        View Code
                    </a>
                </li>
            </ul>
        </section>
    );
}
