import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProductById } from '../utils/api';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const getProduct = async () => {
                try {
                    const { data } = await fetchProductById(id);
                    setProduct(data);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
            getProduct();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category.name}</p>
            <div>
                {product.images.map((image, index) => (
                    <img key={index} src={image} alt={product.name} width="100" />
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;
