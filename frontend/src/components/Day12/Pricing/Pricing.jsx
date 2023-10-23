import React from 'react';
import './Pricing.css';
import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <>
            <section>
                <h2 className="pricing-header" style={{ textAlign: 'center' }}>Pricing Plans</h2>

                <div className="pricing-container">
                    <div className="plan">
                        <h3>Free Plan</h3>
                        <ul>
                            <li>Access to basic features</li>
                            <li>Limited storage</li>
                            <li>Only Chat support</li>
                        </ul>

                        <Link to='/login' className="globalbtn pricingbtn">
                            Login
                        </Link>
                    </div>
                    <div className="plan">
                        <h3>Basic Plan</h3>
                        <ul>
                            <li>Access to basic and premium features</li>
                            <li>More storage</li>
                            <li>Limited premium support</li>
                            <li>24/7 customer support</li>
                        </ul>

                        <Link to='/login' className="globalbtn pricingbtn">
                            Buy at 18$/month
                        </Link>
                    </div>
                    <div className="plan">
                        <h3>Premium Plan</h3>
                        <ul>
                            <li>Access to all features</li>
                            <li>Ample storage</li>
                            <li>Premium support</li>
                            <li>Mobile app access</li>
                            <li>24/7 customer support</li>
                            <li>Priority access to new features</li>
                        </ul>

                        <Link to='/login' className="globalbtn pricingbtn">
                            Buy at 80$/month
                        </Link>
                    </div>
                </div>

            </section>
        </>
    );
}
