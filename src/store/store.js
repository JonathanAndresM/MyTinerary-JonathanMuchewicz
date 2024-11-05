import { configureStore } from "@reduxjs/toolkit";
import { citieReducer } from "./reducers/citiesReducer";
import cityReducer from "./reducers/cityReducer";
import itinerariesReducer from "./reducers/itinerariesReducer";

const store = configureStore({
    reducer: {
        citieReducer,
        cityReducer,
        itinerariesReducer,
    }
})

export default store