import React from 'react';
import '../Day.css'; // Assuming you have a CSS file for styling

const Day29 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 29: Crafting Role-Based Middleware in Node.js</h2>
                <p>
                    Building upon our knowledge of JWT authentication, on Day 29, we created a simple yet powerful role-based authorization middleware. This ensures that only users with specific roles can access certain functionalities.
                </p>
                <p>
                    Let's break down how we created this middleware:
                </p>
                <ol>
                    <li>Created a higher-order function that accepts a role parameter.</li>
                    <li>Returned a middleware function that compares the user's role from the request with the role required.</li>
                    <li>Used the middleware in our route definitions to protect resources based on user roles.</li>
                    <li>Handled unauthorized access attempts with a 403 Forbidden response.</li>
                </ol>
                <p>
                    Here's the code snippet of our role-based authorization middleware:
                </p>
                <pre>
                    <code>
                        {`const authorizeRole = (role) => {
    return (req, res, next) => {
        const user = req.user; // Assuming user information is available in the request

        if (user.role === role) {
            next(); // User has the required role, continue to the route
        } else {
            res.status(403).json({ error: 'Unauthorized: Insufficient role permissions' });
        }
    };
};

module.exports = authorizeRole;
`}
                    </code>
                </pre>
                <p>
                    This approach offers a scalable way to manage user permissions and can be easily extended to check for multiple roles or even complex permission structures.
                </p>
                <p>
                    Stay tuned for Day 30, where we'll dive into building a full-fledged user permissions system that takes advantage of our new middleware!
                </p>
            </section>
        </>
    );
};

export default Day29;
