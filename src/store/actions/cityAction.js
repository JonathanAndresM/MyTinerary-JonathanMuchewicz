export const getCityById = (id) => async (dispatch) => {
    dispatch({ type: 'CITY_REQUEST' });
    try {
        const response = await fetch(`http://localhost:8080/api/cities/city/${id}`);
        const result = await response.json();
        dispatch({ type: 'CITY_SUCCESS', payload: result.response });
    } catch (error) {
        dispatch({ type: 'CITY_FAILURE', error: error.message });
    }
};