import React from 'react';
import '../Day.css'; // Assuming you have a CSS file for styling

const Day28 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 28: Implementing JWT Authentication Middleware</h2>
                <p>
                    Today, we tackled the creation of secure routes in our Node.js application by implementing JWT (JSON Web Token) authentication middleware.
                </p>
                <p>
                    The purpose of this middleware is to ensure that only authenticated users can access certain routes within our application. Here's a step-by-step guide on how we achieved this:
                </p>
                <ol>
                    <li>Installed the `jsonwebtoken` package to work with JWTs.</li>
                    <li>Extracted the token from the `Authorization` header in incoming HTTP requests.</li>
                    <li>Verified the token using our secret key, which we stored in environment variables for security.</li>
                    <li>Queried our user database to confirm that the user associated with the token exists and is valid.</li>
                    <li>Passed user information down to the route handler using `req.user`.</li>
                    <li>Handled errors for missing tokens, verification failures, and user lookup issues.</li>
                </ol>
                <p>
                    Here is the code snippet of our middleware:
                </p>
                <pre>
                    <code>
                        {`const jwt = require("jsonwebtoken");
// const userSchema = require("../models/userSchema");
const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Middleware to validate token and set req.user
const authenticateToken = async (req, res, next) => {
    const token = req.headers.authorization; // Extract token

    if (!token) {
        res.status(401).json({ error: 'Unauthorized: Token not provided' });
        return;
    }

    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        // const user = await userSchema.findOne({ username: decodedToken.username });

        if (!user) {
            res.status(401).json({ error: 'Unauthorized: User not found' });
            return;
        }

        req.user = {
            username: decodedToken.username,
            role: user.role, // Include role property
        };

        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

module.exports = authenticateToken;
`}
                    </code>
                </pre>
                <p>
                    With this middleware in place, our application is now more secure, and we have set the stage for handling user roles and permissions efficiently.
                </p>
                <p>
                    Tomorrow, join us as we explore how to implement role-based access control to further refine our security strategy!
                </p>
            </section>
        </>
    );
};

export default Day28;
