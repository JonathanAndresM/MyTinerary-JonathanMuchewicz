const initialState = {
    city: {},
    loading: false,
    error: null
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CITY_REQUEST':
            return { ...state, loading: true };
        case 'CITY_SUCCESS':
            return { ...state, loading: false, city: action.payload };
        case 'CITY_FAILURE':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default cityReducer;