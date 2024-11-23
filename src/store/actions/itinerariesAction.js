import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItineraries = createAsyncThunk("itineraries/getItineraries",
    async (cityId, { rejectWithValue }) => {
        const token = localStorage.getItem("token")

        if (!token) {
            throw new Error("User is not logged in.")
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/itineraries/city/${cityId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return response.data.response
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })
 