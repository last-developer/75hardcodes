import React from 'react';
import '../Day.css'; // Import your CSS file for styling

const Day32 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 32: Database Indexing and Schema Design Best Practices</h2>
                <p>
                    On the 32nd day of our coding adventure, we delved into the intricacies of database performance and robust schema design. We learned how strategic indexing and thoughtful schema construction can significantly enhance the speed and efficiency of our applications.
                </p>
                <p>
                    Here are the key takeaways and best practices we explored:
                </p>
                <ol>
                    <li><strong>Indexing:</strong> We added indexes to our MongoDB schema to optimize query performance for frequently accessed fields. This can drastically reduce the time it takes to fetch data from a collection.</li>
                    <li><strong>Schema Design:</strong> We discussed how to structure a schema to balance application needs and performance, such as when to use embedding versus referencing.</li>
                    <li><strong>Field Selection:</strong> We learned to select only the necessary fields in our queries to minimize the workload on the database.</li>
                    <li><strong>Normalization vs. Denormalization:</strong> We weighed the pros and cons of normalizing data for consistency against denormalizing for query efficiency.</li>
                </ol>
                <p>
                    To give a practical example, we implemented indexing in our user schema like this:
                </p>
                <pre>
                    <code>
                        {`const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true // Indexing this field for faster queries
  },
  // ... rest of the schema
});

userSchema.index({ email: 1 }); // Compound indexing if we often query by email
`}
                    </code>
                </pre>
                <p>
                    We've now set the stage for our application to handle large volumes of data with ease and grace. We're excited to see the impact of these enhancements on our app's performance!
                </p>
                <p>
                    Tomorrow, for Day 33, we will jump into error handling and robust logging practices to keep our application reliable and our development process smooth.
                </p>
            </section>
        </>
    );
};

export default Day32;
