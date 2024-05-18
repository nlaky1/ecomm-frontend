import React, { useState } from 'react';
import api from '../utils/api';
import { TextField, Button, Typography } from '@mui/material';

const ReviewForm = ({ productId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/products/${productId}/reviews`, { rating, comment });
            setMessage('Review submitted successfully!');
        } catch (err) {
            setMessage('Failed to submit review.');
        }
    };

    return (
        <div>
            <Typography variant="h6">Submit a Review</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Rating"
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    inputProps={{ min: 1, max: 5 }}
                    fullWidth
                    required
                />
                <TextField
                    label="Comment"
                    multiline
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit Review
                </Button>
                {message && <Typography>{message}</Typography>}
            </form>
        </div>
    );
};

export default ReviewForm;
