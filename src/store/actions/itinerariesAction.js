import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItineraries = createAsyncThunk("itineraries/getItineraries",
    async (cityId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/itineraries/city/${cityId}`);
            console.log(response);
            return response.data.response
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })
 
/*export const GET_ITINERARIES_REQUEST = "GET_ITINERARIES_REQUEST";
export const GET_ITINERARIES_SUCCESS = "GET_ITINERARIES_SUCCESS";
export const GET_ITINERARIES_FAILURE = "GET_ITINERARIES_FAILURE";

export const getItineraries = (cityId) => {
    return async (dispatch) => {
        dispatch({ type: GET_ITINERARIES_REQUEST });

        try {
            const response = await axios.get(`http://localhost:8080/api/itineraries/city/${cityId}`);
            dispatch({
                type: GET_ITINERARIES_SUCCESS,
                payload: response.data.response, // Ajusta según la estructura de tu respuesta
            });
        } catch (error) {
            dispatch({
                type: GET_ITINERARIES_FAILURE,
                payload: error.message,
            });
        }
    };
};*/