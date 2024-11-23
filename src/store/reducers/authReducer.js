import { createReducer } from "@reduxjs/toolkit"
import { login, setUser, logout } from "../actions/authAction"


const initialState = {
    loading: false,
    error: null,
    user: null,
    token: null,
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login.pending, (state) => {
            state.loading = true
            state.error = null
            state.user = null
            state.token = null
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.user = action.payload.user
            state.token = action.payload.token
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.user = null
            state.token = null
            localStorage.removeItem("token")
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        })

    .addCase(logout,(state)=> {
        localStorage.removeItem("token")
        state.user = null
        state.token = null
        state.error = null
    })
})

export default authReducer