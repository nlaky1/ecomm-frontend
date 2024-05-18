import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { fetchProducts } from '../redux/actions/productActions';

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.category);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const handleFilter = (e) => {
        setSelectedCategory(e.target.value);
        dispatch(fetchProducts(`category=${e.target.value}`));
    };

    return (
        <div>
            <h1>Filter by Category</h1>
            <select value={selectedCategory} onChange={handleFilter}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
