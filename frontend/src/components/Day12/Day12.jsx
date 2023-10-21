import React from 'react';
import '../Day.css';
import { Link } from 'react-router-dom';

export default function Day12() {
    return (
        <section className="day-container">
            <h2 className="day-header">Day 12: Pricing Plans</h2>
            <p>
                Welcome to Day 12 of our 75-day coding challenge! Today, we're introducing our pricing plans for our web application.
                We offer a range of options to cater to different needs.
            </p>

            <h3>Free Plan</h3>
            <p>
                Our Free Plan includes all the basic features you need to get started. You'll have access to online support,
                our community, and even our mobile app. It's the perfect plan for those just getting started.
            </p>

            <h3>Basic Plan</h3>
            <p>
                Our Basic Plan builds upon the Free Plan by adding advanced analytics and premium support. It's ideal for those
                looking for more insights and assistance with their web application.
            </p>

            <h3>Premium Plan</h3>
            <p>
                For those who need the best of the best, our Premium Plan offers unlimited storage, priority support, and all
                the features of the Basic Plan. It's the ultimate choice for a top-tier experience.
            </p>

            <p>
                Our pricing plans are designed to provide flexibility and cater to the different needs of our users.
                Whether you're looking for a free plan or premium features, we have something for everyone.
            </p>

            <p>
                You can explore the details of each plan on our website and make the best choice for your needs.
            </p>

            <ul>
                <li>
                    <Link to={'/pricing'}>Explore Pricing</Link>
                </li>
                <li>
                    <a href="https://github.com/last-developer/75hardcodes/tree/master/frontend/src/components/Day12" target="_blank">
                        View Code
                    </a>
                </li>
            </ul>
        </section>
    );
}