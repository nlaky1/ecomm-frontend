import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../reducers/productReducer';
import api from '../../utils/api';

export const fetchProducts = (query = '') => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const { data } = await api.get(`/products?query=${query}`);
        dispatch(fetchProductsSuccess(data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
    }
};
