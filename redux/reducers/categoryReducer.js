import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        fetchCategoriesRequest: (state) => {
            state.loading = true;
        },
        fetchCategoriesSuccess: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        fetchCategoriesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
} = categorySlice.actions;

export default categorySlice.reducer;
