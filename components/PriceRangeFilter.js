import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const PriceRangeFilter = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const dispatch = useDispatch();

    const handleFilter = (e) => {
        e.preventDefault();
        const query = `minPrice=${minPrice}&maxPrice=${maxPrice}`;
        dispatch(fetchProducts(query));
    };

    return (
        <div>
            <h1>Filter by Price Range</h1>
            <form onSubmit={handleFilter}>
                <div>
                    <label>Min Price:</label>
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label>Max Price:</label>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
                <button type="submit">Filter</button>
            </form>
        </div>
    );
};

export default PriceRangeFilter;
