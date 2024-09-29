import axios from 'axios';

export const fetchCategories = () => async (dispatch) => {
    const response = await axios.get('https://dummyjson.com/products/categories');
    dispatch({ type: 'FETCH_CATEGORIES', payload: response.data });
};

export const fetchProducts = (category = '', search = '', page = 1) => async (dispatch) => {
    const response = await axios.get(`https://dummyjson.com/products`, {
        params: {
            limit: 10,
            skip: (page - 1) * 10,
            category,
            search,
        },
    });
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data.products });
};
