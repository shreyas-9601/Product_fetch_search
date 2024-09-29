const initialState = {
    categories: [],
    products: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return { ...state, categories: action.payload };
        case 'FETCH_PRODUCTS':
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
