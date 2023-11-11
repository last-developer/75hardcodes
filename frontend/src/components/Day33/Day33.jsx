import React from 'react';
import '../Day.css'; // Make sure the path to your CSS is correct

const Day33 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 33: Robust Error Handling and Logging in Node.js</h2>
                <p>
                    On Day 33, we've fortified our application by focusing on error handling and logging, two pillars that enhance the reliability and maintainability of our code.
                </p>
                <p>
                    Here’s how we improved our application today:
                </p>
                <ul>
                    <li><strong>Error Handling:</strong> We implemented structured error handling middleware in Express to catch and respond to various error scenarios gracefully.</li>
                    <li><strong>Logging:</strong> We integrated a logging library, like Winston or Morgan, to keep a detailed record of server events and errors, which aids in debugging and monitoring our application's health.</li>
                </ul>
                <p>
                    We learned that good error handling and logging are not just about catching errors, but also about providing meaningful feedback to users and developers. It’s about understanding the 'why' behind an error and having the tools to prevent it in the future.
                </p>
                <p>
                    Here is a simplified example of an error-handling middleware:
                </p>
                <pre>
                    <code>
                        {`app.use((err, req, res, next) => {
  console.error(err.stack); // Log the stack trace for debugging
  res.status(500).send('Something broke!');
});`}
                    </code>
                </pre>
                <p>
                    And here’s how we might set up logging with Morgan:
                </p>
                <pre>
                    <code>
                        {`const morgan = require('morgan');
app.use(morgan('tiny')); // Use the 'tiny' logging format`}
                    </code>
                </pre>
                <p>
                    By the end of the day, our application was not only more reliable but also more transparent in terms of operational visibility.
                </p>
                <p>
                    Stay tuned for Day 34, where we'll be tackling automated tests to ensure our application's functionality is rock-solid at every release.
                </p>
            </section>
        </>
    );
};

export default Day33;
