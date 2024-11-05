import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCityById = createAsyncThunk("GET_CITY_BY_ID", async (_id) => {
    const response = await axios.get(`http://localhost:8080/api/cities/city/${_id}`)
    return response.data.response
})