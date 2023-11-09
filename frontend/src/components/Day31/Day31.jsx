import React from 'react';
import '../Day.css';

const Day31 = () => {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 31: Advanced Mongoose Schemas and Relationships</h2>
                <p>
                    Today, on Day 31 of our coding series, we've dived into the deeper waters of Mongoose, sculpting more sophisticated schemas and setting up relationships between different data models.
                </p>
                <p>
                    Let's recap what we covered:
                </p>
                <ol>
                    <li><strong>Advanced Schema Types:</strong> Exploring different data types, such as arrays and nested schemas, for more complex data structures.</li>
                    <li><strong>Validation Logic:</strong> Implementing custom validation rules to ensure data integrity before saving documents to the database.</li>
                    <li><strong>Pre-Save Hooks:</strong> Using middleware to process or validate data before it's saved, like hashing passwords.</li>
                    <li><strong>Virtuals:</strong> Creating virtual properties that aren't stored in the database but are computed on the fly.</li>
                    <li><strong>Relationships:</strong> Using references and the `populate()` method to manage relationships between documents across different collections.</li>
                </ol>
                <p>
                    Here's a snippet to illustrate a user schema with some of these concepts applied:
                </p>
                <pre>
                    <code>
                        {`const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

// Virtual for user's full name
userSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});

const User = mongoose.model('User', userSchema);
module.exports = User;`}
                    </code>
                </pre>
                <br />
                <p>Here, posts is an array of ObjectId references to the Post model. To fetch a user's posts when you query for a user, you would use populate() like this:</p>
                <pre>
                    <code>
                        {
                            `User.findById(userId).populate('posts').exec((err, user) => {
if (err) handleErr(err);
console.log(user.posts);
// This will be an array of Post documents, not just their IDs.
})`
                        }
                    </code>
                </pre>
                <br />
                <p>
                    This schema includes custom validation, pre-save hooks for password hashing, and sets up a virtual for a full name that's not stored in the database. It also links to a 'Post' model, allowing us to populate user documents with their associated posts.
                </p>
                <p>
                    These advanced features provide a powerful toolkit for managing and querying data effectively. As we build and scale our application, these Mongoose features will be invaluable.
                </p>
                <p>
                    Stay tuned for Day 32, where we'll tackle indexing for performance optimization and best practices in schema design!
                </p>
            </section>
        </>
    );
};

export default Day31;