import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCityById = createAsyncThunk("GET_CITY_BY_ID", async (_id) => {
    const token = localStorage.getItem("token")
    
    if (!token) {
        throw new Error("User is not logged in.")
    }

    try {
        const response = await axios.get(`http://localhost:8080/api/cities/city/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data.response
    } catch (error) {
        throw error.response?.data?.messages || "Error fetching cities."
    }
})