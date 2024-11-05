import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItineraries = createAsyncThunk("itineraries/getItineraries",
    async (cityId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/itineraries/city/${cityId}`);
            return response.data.response
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })
 