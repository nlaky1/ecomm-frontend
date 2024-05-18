import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/api';
import ReviewsList from '../../components/ReviewsList';
import ReviewForm from '../../components/ReviewForm';
import { Container, Typography, CircularProgress, Grid, Card, CardContent } from '@mui/material';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const { data } = await api.get(`/products/${id}`);
                    setProduct(data);
                    setLoading(false);
                } catch (err) {
                    setError('Failed to fetch product.');
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [id]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {product.name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Description</Typography>
                            <Typography>{product.description}</Typography>
                            <Typography>Price: ${product.price}</Typography>
                            <Typography>Stock: {product.stock}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ReviewForm productId={id} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <ReviewsList productId={id} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetail;
