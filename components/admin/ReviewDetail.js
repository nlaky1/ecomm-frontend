import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/api';
import { Typography, Card, CardContent, Button, CircularProgress } from '@mui/material';

const ReviewDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            const fetchReview = async () => {
                try {
                    const { data } = await api.get(`/reviews/${id}`);
                    setReview(data);
                    setLoading(false);
                } catch (err) {
                    setError('Failed to fetch review.');
                    setLoading(false);
                }
            };
            fetchReview();
        }
    }, [id]);

    const handleApprove = async () => {
        try {
            await api.patch(`/reviews/${id}`, { status: 'approved' });
            setReview({ ...review, status: 'approved' });
        } catch (err) {
            setError('Failed to approve review.');
        }
    };

    const handleReject = async () => {
        try {
            await api.patch(`/reviews/${id}`, { status: 'rejected' });
            setReview({ ...review, status: 'rejected' });
        } catch (err) {
            setError('Failed to reject review.');
        }
    };

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h6">Product: {review.product.name}</Typography>
                    <Typography>Rating: {review.rating}</Typography>
                    <Typography>{review.comment}</Typography>
                    <Typography>Status: {review.status}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleApprove}
                        disabled={review.status === 'approved'}
                    >
                        Approve
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleReject}
                        disabled={review.status === 'rejected'}
                    >
                        Reject
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ReviewDetail;
