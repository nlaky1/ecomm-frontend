import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await api.get('/categories');
                setCategories(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch categories.');
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Shop by Category
            </Typography>
            <Grid container spacing={3}>
                {categories.map((category) => (
                    <Grid item key={category._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{category.name}</Typography>
                                <Typography>{category.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CategoryList;
