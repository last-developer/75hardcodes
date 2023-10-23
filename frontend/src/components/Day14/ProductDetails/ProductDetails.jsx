import React from 'react';
import './ProductDetails.css';
import rolex from '../../../assets/rolex.jpg'

const product = {
    name: 'Rolex 365',
    description: `The Rolex 365 watch is the epitome of timeless elegance and precision engineering. Crafted with the finest materials and Swiss watchmaking expertise, this exquisite timepiece is designed to elevate your style and keep you on time, every time.`,
    price: 499.99,
    image: rolex,
    reviews: 25,
};

const ProductDetails = () => {
    return (
        <section className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                    <span className="product-price">${product.price}</span>
                    <div className="product-rating">
                        <span className="product-rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="product-reviews">{product.reviews} Reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
