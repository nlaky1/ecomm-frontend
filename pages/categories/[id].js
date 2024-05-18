import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/api';

const CategoryDetail = () => {
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Category: {category.name}</h1>
            <p>Description: {category.description}</p>
            <p>Parent Category: {category.parentCategoryId ? category.parentCategoryId.name : 'None'}</p>
        </div>
    );
};

export default CategoryDetail;
