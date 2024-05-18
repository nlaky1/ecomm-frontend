import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
});

export default rootReducer;
