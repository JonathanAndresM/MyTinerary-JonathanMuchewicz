import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAction("SET_SEARCH")

export const getCities = createAsyncThunk("GET_CITIES", async (search = "") => {
    const url = search
    ? `http://localhost:8080/api/cities/all?city=${search}`
    : "http://localhost:8080/api/cities/all"
    const response = await axios.get(url)
    return response.data.response
})

