import { createSlice } from "@reduxjs/toolkit";
import { getItineraries } from "../actions/itinerariesAction";

const initialState = {
    itineraries: [],
    loading: true,
    error: null,
};

const itinerariesReducer = createSlice({
    name: "itineraries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItineraries.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getItineraries.fulfilled, (state, action) => {
                state.loading = false
                state.itineraries = action.payload
                state.error = null
            })
            .addCase(getItineraries.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Error Loading Itinerary"
            })
    },
})

export default itinerariesReducer.reducer;
