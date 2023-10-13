import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day4() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 4: Header with Responsive Menu</h2>
            <p>
                Today, we've created a header with a responsive menu for a better user experience on smaller screens.
                Our header includes a logo on the left and navigation links on the right.
            </p>
            <p>
                On smaller screens, the navigation links are hidden behind a menu icon. When user click the menu icon, the
                links slide in from the right, providing a clean and user-friendly navigation experience.
            </p>
            <p>
                We've used React for building the header and MUI (Material-UI) icons for the menu icon. This makes our header
                both functional and visually appealing.
            </p>
            <p>
                You can check out the component and its code below:
            </p>
            <ul>
                <li>
                    <Link to={'/appheader'}>Visit Component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day4" target="_blank">
                        View Code
                    </a>
                </li>
            </ul>
        </section>
    );
}
