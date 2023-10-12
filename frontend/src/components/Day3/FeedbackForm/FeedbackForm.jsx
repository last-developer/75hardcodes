import React, { useState } from 'react';
import './FeedbackForm.css'; // Import your responsive CSS file
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

export default function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate sending feedback data to a server
        // Replace this with your actual data submission logic
        const feedbackData = {
            name,
            email,
            feedback,
            rating,
        };

        console.log('Feedback Data:', feedbackData);
        alert('Feedback submitted successfully')

        // Clear form fields
        setName('');
        setEmail('');
        setFeedback('');
        setRating(0);
    };

    return (
        <div className="feedback-container">
            <h2 className="feedback-header">Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rate Your Experience:</label>
                    <Box component="fieldset" borderColor="black">
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(event, newValue) => setRating(newValue)}
                            size="large"
                        />
                    </Box>
                </div>
                <div className="form-group">
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}
