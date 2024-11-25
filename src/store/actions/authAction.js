import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const setUser = createAction("setUser", (datos) => {
    return { payload: datos }
})

export const logout = createAction("logout")

export const login = createAsyncThunk("login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const credentials = { email, password }
        const response = await axios.post("http://localhost:8080/api/auth/signIn", credentials)
        localStorage.setItem("token", response.data.token)
        return {
            user: response.data.user,
            token: response.data.token,
        }
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login Error credentials invalid")
    }
})