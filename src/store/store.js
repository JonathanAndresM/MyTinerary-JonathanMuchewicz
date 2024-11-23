import { configureStore } from "@reduxjs/toolkit";
import { citieReducer } from "./reducers/citiesReducer";
import {cityReducer} from "./reducers/cityReducer";
import itinerariesReducer from "./reducers/itinerariesReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        citieReducer,
        cityReducer,
        itinerariesReducer,
        authReducer,
    }
})

export default store