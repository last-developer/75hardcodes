import React from 'react';
import '../Day.css'; 
import { Link } from 'react-router-dom';

export default function Day18() {
    return (
        <>
            <section className="day-container">
                <h2 className="day-header">Day 18: Creating the "My Orders" Page</h2>
                <p>
                    Welcome to Day 18 of our coding journey! Today, we're diving into the world of e-commerce and creating a "My Orders" page for our users.
                </p>
                <p>
                    The "My Orders" page is an essential feature for any online store. It allows users to view their order history, including details such as order IDs, order dates, purchased items, and the total amount spent.
                </p>
                <p>
                    In our example, we've created a sleek and responsive layout to display the user's order history. The data is fetched from a data source, and the orders are dynamically rendered in a table format.
                </p>
                <p>
                    You can integrate this "My Orders" feature into your e-commerce project, making it easy for your users to keep track of their purchases.
                </p>
                <ul>
                <li>
                    <Link to={'/myorders'}> Component</Link>
                </li>
                    <li>
                        <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day18" target="_blank">View the Code</a>
                    </li>
                </ul>
            </section>
        </>
    );
}
