import React from 'react';
import '../Day.css'; // Import your responsive CSS file
import { Link } from 'react-router-dom';

export default function Day14() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 14: Product Details Component</h2>
            <p>
                On Day 14, we've delved into creating a fundamental component for our web application – the "Product Details" component.
                This component provides detailed information about a product, similar to what you might find on e-commerce platforms like Amazon.
            </p>
            <p>
                Our Product Details component showcases essential details of a product, including its name, description, price, image, ratings, and reviews.
                We've used dummy data to populate this component, giving you a glimpse of what the final product display might look like.
            </p>
            <p>
                This component's design is not just visually appealing but also responsive, ensuring a seamless user experience across various devices.
            </p>
            <p>
                If you'd like to explore the code and check out how we've implemented the Product Details component, feel free to visit the component itself or view the code on GitHub:
            </p>
            <ul>
                <li>
                    <Link to={'/productdetails'}>Visit Product Details Component</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day14/ProductDetails" target="_blank">
                        View Code on GitHub
                    </a>
                </li>
            </ul>
        </section>
    );
}
