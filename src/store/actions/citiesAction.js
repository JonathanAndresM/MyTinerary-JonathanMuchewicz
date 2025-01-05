import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const uri_render = "https://mytinerary-api-udyl.onrender.com"

export const setSearch = createAction("SET_SEARCH")

export const getCities = createAsyncThunk("GET_CITIES", async (search = "") => {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("User is not logged in.")
    }
    const url = search
    ? `${uri_render}/api/cities/all?city=${search}`
    : `${uri_render}/api/cities/all`
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
