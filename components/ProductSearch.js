import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const ProductSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchProducts(query));
    };

    return (
        <div>
            <h1>Search Products</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default ProductSearch;
