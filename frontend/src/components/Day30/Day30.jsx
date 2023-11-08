import React from 'react';
import '../Day.css'; // Make sure you link to your actual CSS file

const Day30 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 30: Setting Up MongoDB with Node.js</h2>
                <p>
                    On Day 30 of our coding journey, we've tackled setting up a MongoDB database for our Node.js applications. We've used Mongoose, a powerful ODM library, to manage our MongoDB interactions.
                </p>
                <p>
                    Here's a step-by-step guide to what we did:
                </p>
                <ol>
                    <li>Installed Mongoose via npm to act as our Object Data Modeling (ODM) library for MongoDB and Node.js.</li>
                    <li>Created a connection to our MongoDB database using the connection string provided by MongoDB Atlas.</li>
                    <li>Defined a simple user schema to illustrate how we can structure the data in our collections.</li>
                    <li>Ensured our database connection is initialized when our server starts up.</li>
                </ol>
                <p>
                    Check out the code snippets below for more detail on each step:
                </p>
                <p>
                    <strong>Database Connection:</strong>
                </p>
                <pre>
                    <code>
                        {`const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_DB_URI

// Connect to MongoDB
const connectDatabase = () => {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = connectDatabase;
`}
                    </code>
                </pre>
                <p>
                    <strong>User Schema:</strong>
                </p>
                <pre>
                    <code>
                        {`const userSchema = new mongoose.Schema({
    // Schema definition here
});

module.exports = mongoose.model('User', userSchema);
`}
                    </code>
                </pre>
                <p>
                    <strong>Server Initialization:</strong>
                </p>
                <pre>
                    <code>
                        {`// Essential server setup code here

// Start database
connectDatabase()

// More server setup and route definitions here
`}
                    </code>
                </pre>
                <p>
                    Don't forget to add your MongoDB URI in your <code>.env</code> file to keep your database credentials secure.
                </p>
                <p>
                    With these steps, our Node.js app now has a robust and scalable MongoDB setup, ready to handle our data management needs. As we continue to build out our application, we'll see just how powerful this setup can be!
                </p>
                <p>
                    Join us tomorrow for Day 31, where we'll explore advanced Mongoose schema designs and relationship management within MongoDB!
                </p>
            </section>
        </>
    );
};

export default Day30;