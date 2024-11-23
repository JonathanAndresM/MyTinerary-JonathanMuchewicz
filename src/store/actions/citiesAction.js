import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAction("SET_SEARCH")

export const getCities = createAsyncThunk("GET_CITIES", async (search = "") => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    const url = search
    ? `http://localhost:8080/api/cities/all?city=${search}`
    : "http://localhost:8080/api/cities/all"
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data.response
    } catch (error) {
        throw error.response?.data?.messages || "Error fetching cities."
    }
    
})
