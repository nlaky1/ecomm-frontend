import React from 'react';
import Slider from 'react-slick';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import CategoryList from './CategoryList';
import FeaturedProducts from './FeaturedProducts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const featuredImages = [
    { src: '/images/featured1.jpg', title: 'Featured 1', description: 'Description for featured 1' },
    { src: '/images/featured2.jpg', title: 'Featured 2', description: 'Description for featured 2' },
    { src: '/images/featured3.jpg', title: 'Featured 3', description: 'Description for featured 3' },
    { src: '/images/featured4.jpg', title: 'Featured 4', description: 'Description for featured 4' }
];

const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to Our Store
            </Typography>
            <Slider {...settings}>
                {featuredImages.map((image, index) => (
                    <Card key={index}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={image.src}
                            alt={image.title}
                        />
                        <CardContent>
                            <Typography variant="h5">{image.title}</Typography>
                            <Typography>{image.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Slider>
            <CategoryList />
            <FeaturedProducts />
        </Container>
    );
};

export default Homepage;
