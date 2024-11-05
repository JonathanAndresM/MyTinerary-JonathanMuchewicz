import { createReducer } from "@reduxjs/toolkit";
import { getCityById } from "../actions/cityAction";

const initialState = {
    city: {},
    loading: false,
    error: null
};

export const cityReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCityById.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getCityById.fulfilled, (state, action) => {
            state.loading = false
            state.city = action.payload
            state.error = null
        })
        .addCase(getCityById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Error loading city"
        })
})