import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Typography, Card, CardContent, Button, Grid, CircularProgress } from '@mui/material';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await api.get('/reviews');
                setReviews(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch reviews.');
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    const handleApprove = async (reviewId) => {
        try {
            await api.patch(`/reviews/${reviewId}`, { status: 'approved' });
            setReviews(reviews.map((review) => review._id === reviewId ? { ...review, status: 'approved' } : review));
        } catch (err) {
            setError('Failed to approve review.');
        }
    };

    const handleReject = async (reviewId) => {
        try {
            await api.patch(`/reviews/${reviewId}`, { status: 'rejected' });
            setReviews(reviews.map((review) => review._id === reviewId ? { ...review, status: 'rejected' } : review));
        } catch (err) {
            setError('Failed to reject review.');
        }
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Reviews Management
            </Typography>
            <Grid container spacing={3}>
                {reviews.map((review) => (
                    <Grid item key={review._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Product: {review.product.name}</Typography>
                                <Typography>Rating: {review.rating}</Typography>
                                <Typography>{review.comment}</Typography>
                                <Typography>Status: {review.status}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleApprove(review._id)}
                                    disabled={review.status === 'approved'}
                                >
                                    Approve
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleReject(review._id)}
                                    disabled={review.status === 'rejected'}
                                >
                                    Reject
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ReviewList;
