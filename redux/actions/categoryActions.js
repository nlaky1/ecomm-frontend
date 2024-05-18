import { fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure } from '../reducers/categoryReducer';
import { fetchCategories } from '../../utils/api';

export const getCategories = () => async (dispatch) => {
    dispatch(fetchCategoriesRequest());
    try {
        const { data } = await fetchCategories();
        dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
        dispatch(fetchCategoriesFailure(error.message));
    }
};
