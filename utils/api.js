import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
});

// Interceptors can be added here if needed

export const fetchProducts = async () => {
    return await api.get('/products');
};

export const fetchProductById = async (id) => {
    return await api.get(`/products/${id}`);
};

export const fetchOrders = async () => {
    return await api.get('/orders');
};

export const fetchOrderById = async (id) => {
    return await api.get(`/orders/${id}`);
};

export const registerUser = async (userData) => {
    return await api.post('/auth/register', userData);
};

export const loginUser = async (userData) => {
    return await api.post('/auth/login', userData);
};

export const getUserProfile = async () => {
    return await api.get('/auth/me');
};

export const fetchCategories = async () => {
    return await api.get('/categories');
};

export const fetchCategoryById = async (id) => {
    return await api.get(`/categories/${id}`);
};

export const createCategory = async (categoryData) => {
    return await api.post('/categories', categoryData);
};

export const updateCategory = async (id, categoryData) => {
    return await api.put(`/categories/${id}`, categoryData);
};

export const deleteCategory = async (id) => {
    return await api.delete(`/categories/${id}`);
};

export const createPayment = async (paymentData) => {
    return await api.post('/payments', paymentData);
};

export const fetchReviews = async (productId) => {
    return await api.get(`/products/${productId}/reviews`);
};

export const createReview = async (productId, reviewData) => {
    return await api.post(`/products/${productId}/reviews`, reviewData);
};

// Additional API methods for other endpoints...

export default api;
