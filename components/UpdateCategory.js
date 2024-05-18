import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';

const UpdateCategory = () => {
    const router = useRouter();
    const { id } = router.query;
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchCategory = async () => {
                try {
                    const { data } = await api.get(`/categories/${id}`);
                    setCategory(data);
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
            fetchCategory();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/categories/${id}`, category);
            alert('Category updated successfully!');
            router.push('/categories');
        } catch (err) {
            console.error(err);
            alert('Failed to update category.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Update Category</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={category.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={category.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Parent Category ID:</label>
                    <input
                        type="text"
                        name="parentCategoryId"
                        value={category.parentCategoryId}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Category</button>
            </form>
        </div>
    );
};

export default UpdateCategory;
