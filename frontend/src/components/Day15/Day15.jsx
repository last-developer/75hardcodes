import React from 'react';
import '../Day.css'; 
import { Link } from 'react-router-dom';

export default function Day15() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 15: User Reviews and Ratings</h2>
            <p>
                On Day 15, we've added a fantastic new feature to our product page: User Reviews and Ratings.
                Now, users can share their experiences and rate our products, providing valuable feedback to others.
            </p>
            <p>
                With a clean and user-friendly interface, you can browse through existing reviews, see star ratings,
                and read comments from fellow shoppers.
            </p>
            <p>
                We've also made it easy for you to add your review. Just enter your name, select a star rating,
                write your comments, and hit "Submit Review." Your review will be added to the product's profile.
            </p>
            <p>
                To make this possible, we used React for the frontend and Material-UI (MUI) components for creating
                an intuitive review system with star ratings.
            </p>
            <p>
                We're excited to see your reviews and learn about your experiences with our products. Your feedback
                helps us improve and serve you better.
            </p>
            <ul>
                <li>
                    <Link to={'/productdetails'}>Component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day14/ProductDetails" target="_blank">
                        View Code
                    </a>
                </li>
            </ul>
        </section>
    );
}
