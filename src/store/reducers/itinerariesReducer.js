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
                console.log("Itinerary State Pending");
                state.loading = true
                state.error = null
            })
            .addCase(getItineraries.fulfilled, (state, action) => {
                console.log("Itinerary State Successful");
                state.loading = false
                state.itineraries = action.payload
                state.error = null
            })
            .addCase(getItineraries.rejected, (state, action) => {
                console.log("Itinerary State Error");
                state.loading = false
                state.error = action.error.message || "Error Loading Itinerary"
            })
    },
})

export default itinerariesReducer.reducer;



/*const itinerariesReducer = createReducer(initialState, (builder) => {
    builder.addCase(getItineraries.pending, (state) => {
        console.log("Itinerary State Pending");
        state.loading = true
        state.error = null
    })
        .addCase(getItineraries.fulfilled, (state, action) => {
            console.log("Itinerary State Successful");
            state.loading = false
            state.itineraries = action.payload
            state.error = null
        })
        .addCase(getItineraries.rejected, (state, action) => {
            console.log("Itinerary State Error");
            state.loading = false
            state.error = action.error.message || "Error Loading Itinerary"
        })
})*/


/*const itinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITINERARIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_ITINERARIES_SUCCESS:
            return {
                ...state,
                loading: false,
                itineraries: action.payload,
            };
        case GET_ITINERARIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};*/