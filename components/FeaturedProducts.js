import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const { data } = await api.get('/products/featured');
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch featured products.');
                setLoading(false);
            }
        };
        fetchFeaturedProducts();
    }, []);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Featured Products
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="300"
                                image={product.images[0]}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h5">{product.name}</Typography>
                                <Typography>${product.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FeaturedProducts;
