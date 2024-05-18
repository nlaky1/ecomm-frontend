import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductSearch from './ProductSearch';
import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';
import { Container, Typography, Card, CardContent, CircularProgress, Grid } from '@mui/material';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Products
            </Typography>
            <ProductSearch />
            <CategoryFilter />
            <PriceRangeFilter />
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography>{product.description}</Typography>
                                <Typography>${product.price}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductList;
