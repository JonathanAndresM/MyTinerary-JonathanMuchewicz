import { createReducer } from "@reduxjs/toolkit";
import { getCities, setSearch } from "../actions/citiesAction";

const initialState = {
    allCities: [],
    cities: [],
    search: "",
    loading: false,
    error: null,
}

export const citieReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setSearch, (state, action) => {
            state.search = action.payload
        })
        .addCase(getCities.pending, (state) => {
            console.log("State Pending")
            state.loading = true
            state.error = null
        })
        .addCase(getCities.fulfilled, (state, action) => {
            state.loading = false
            state.allCities = action.payload;
            state.cities = action.payload
            state.error = null
        })
        .addCase(getCities.rejected, (state, action) => {
            console.log("State Error")
            state.loading = false
            state.error = action.error.message || "Error loading cities"
        })
        .addCase("SET_FILTERED_CITIES", (state, action) => {
            state.cities = action.payload; // Actualiza solo las ciudades filtradas
        })
})