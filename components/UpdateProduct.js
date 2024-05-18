import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';

const UpdateProduct = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const { data } = await api.get(`/products/${id}`);
                    setProduct(data);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/products/${id}`, product);
            alert('Product updated successfully!');
            router.push('/products');
        } catch (err) {
            console.error(err);
            alert('Failed to update product.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Images:</label>
                    <input
                        type="text"
                        name="images"
                        value={product.images.join(', ')}
                        onChange={(e) =>
                            setProduct({ ...product, images: e.target.value.split(', ') })
                        }
                    />
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
