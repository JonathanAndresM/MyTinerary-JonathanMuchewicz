import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://mytinerary-api-udyl.onrender.com"

export const getCityById = createAsyncThunk("GET_CITY_BY_ID", async (_id) => {
    const token = localStorage.getItem("token")
    
    if (!token) {
        throw new Error("User is not logged in.")
    }

    try {
        const response = await axios.get(`${uri_render}/api/cities/city/${_id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data.response
    } catch (error) {
        throw error.response?.data?.messages || "Error fetching cities."
    }
})