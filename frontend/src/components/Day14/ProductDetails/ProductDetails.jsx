import React, { useState } from 'react';
import './ProductDetails.css';
import rolex from '../../../assets/rolex.jpg';
import { Box, Button, Container, Grid, Paper, Rating, TextField, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const product = {
    name: 'Rolex 365',
    description: `The Rolex 365 watch is the epitome of timeless elegance and precision engineering. Crafted with the finest materials and Swiss watchmaking expertise, this exquisite timepiece is designed to elevate your style and keep you on time, every time.`,
    price: 499.99,
    image: rolex,
    reviews: [
        { username: 'User1', rating: 5, comment: 'Great watch!' },
        { username: 'User2', rating: 5, comment: 'Love it!' },
        { username: 'User3', rating: 4, comment: 'Not bad.' },
    ],
};

const ProductDetails = () => {
    const [userReview, setUserReview] = useState({ username: '', rating: 5, comment: '' });

    const handleUserReview = () => {
        if (userReview.username && userReview.comment) {
            product.reviews.push(userReview);
            setUserReview({ username: '', rating: 5, comment: '' });
        }
    };

    const calculateAverageRating = () => {
        const totalRatings = product.reviews.reduce((total, review) => total + review.rating, 0);
        const averageRating = totalRatings / product.reviews.length;
        return averageRating.toFixed(1);
    };

    const renderStarRating = () => {
        const averageRating = calculateAverageRating();
    
        return (
            <div className="product-rating">
                <Box component="fieldset" borderColor="transparent">
                    <Rating
                        name="average-rating"
                        value={parseFloat(averageRating)}
                        precision={0.1}
                        readOnly
                        emptyIcon={
                            <StarIcon
                                style={{ color: '#e0e0e0', width: '1em', height: '1em' }}
                            />
                        }
                        icon={
                            <StarIcon
                                style={{ width: '1em', height: '1em' }}
                            />
                        }
                    />
                </Box>
                <Typography className="product-global-reviews" style={{padding:'5px'}}>{product.reviews.length} Reviews</Typography>
            </div>
        );
    };
    
    return (
        <section className="product-container">
            <div>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-description">{product.description}</p>
                    <div className="product-meta">
                        <span className="product-price">${product.price}</span>
                        {renderStarRating()}
                        {/* <Box className="product-rating">
                            <Rating
                                name="average-rating"
                                value={parseFloat(calculateAverageRating())}
                                precision={0.1}
                                readOnly
                            />
                            <Typography className="product-reviews">{product.reviews.length} Reviews</Typography>
                        </Box> */}
                    </div>
                </div>
            </div>

            <div className="product-reviews" style={{ marginTop: '10px' }}>
                <h3 style={{ marginBottom: '10px' }}>Reviews</h3>
                <ul>
                    {product.reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.username}:</strong> {review.comment}
                        </li>
                    ))}
                </ul>
                <h3>Add Your Review</h3>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={userReview.username}
                    onChange={(e) => setUserReview({ ...userReview, username: e.target.value })}
                />
                <select
                    value={userReview.rating}
                    onChange={(e) => setUserReview({ ...userReview, rating: parseFloat(e.target.value) })}
                >
                    <option value="1">1 (Poor)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Excellent)</option>
                </select>
                <textarea
                    placeholder="Your Review"
                    value={userReview.comment}
                    onChange={(e) => setUserReview({ ...userReview, comment: e.target.value })}
                />
                <button onClick={handleUserReview} className='globalbtn'>Submit Review</button>
            </div>
        </section>
    );
};

export default ProductDetails;