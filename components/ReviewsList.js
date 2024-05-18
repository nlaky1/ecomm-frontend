import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { Typography, Card, CardContent } from '@mui/material';

const ReviewsList = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await api.get(`/products/${productId}/reviews`);
                setReviews(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch reviews.');
                setLoading(false);
            }
        };
        fetchReviews();
    }, [productId]);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <div>
            <Typography variant="h6">Reviews</Typography>
            {reviews.map((review) => (
                <Card key={review._id}>
                    <CardContent>
                        <Typography>Rating: {review.rating}</Typography>
                        <Typography>{review.comment}</Typography>
                        <Typography>By: {review.user.name}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ReviewsList;
