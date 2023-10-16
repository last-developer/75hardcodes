import '../Day.css';
import { Link } from 'react-router-dom';

export default function Day7() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 7: User Profile Component</h2>
            <p>
                On Day 7, we dive into creating a User Profile component, a critical part of many web applications.
                A User Profile page allows users to view and manage their personal information, account settings, and more.
            </p>
            <p>
                The User Profile component typically displays user details, such as name, email, profile picture, and
                various settings options. Users can update their information, change their profile picture, or adjust
                account preferences.
            </p>
            <p>
                In this challenge, we use React to build a User Profile component that showcases different aspects of
                user account management. We might integrate functionalities like updating user information, profile
                picture uploads, and changing password settings.
            </p>
            <p>
                To enhance the user experience, we ensure that our User Profile component is responsive, making it look
                great on various screen sizes. We apply CSS styles to create an organized and user-friendly interface.
            </p>
            <p>
                Day 7 brings us closer to becoming proficient web developers, as we continue to build essential web
                components and improve our coding skills. Stay tuned for more exciting challenges and coding exercises!
            </p>
            <ul>
                <li>
                    <Link to={'/userprofile'}>View Component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day7/UserProfile" target='_blank'>Code</a>
                </li>
            </ul>
        </section>
    );
}
