import React, { useState } from 'react';
import api from '../utils/api';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            name,
            description,
            price,
            category,
            brand,
            stock,
            images,
        };
        try {
            await api.post('/products', productData);
            alert('Product added successfully!');
        } catch (err) {
            console.error(err);
            alert('Failed to add product.');
        }
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <label>Brand:</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <div>
                    <label>Images:</label>
                    <input
                        type="text"
                        value={images.join(', ')}
                        onChange={(e) => setImages(e.target.value.split(', '))}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
