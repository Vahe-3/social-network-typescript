import {createSlice} from "@reduxjs/toolkit";

import {AuthStateType} from "../../types/authTypes";
import {authThunk, logInThunk, logoutThunk} from "../thunks/authThunks";


const initialState: AuthStateType = {

    data: {
        id: null,
        login: null,
        email: null,

    },

    isAuth: false,
    isLoading: false,
    error: null,


};

const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(authThunk.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;

            })
            .addCase(authThunk.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.isAuth = true;
                state.isLoading = false;
            })
            .addCase(authThunk.rejected, (state, action) => {
                state.isLoading = false;
            })

            .addCase(logInThunk.rejected, (state, action) => {

                state.error = action.payload ? action.payload : "Unknown error";

            })

            .addCase(logoutThunk.pending, (state, action) => {

                state.isLoading = true;
                state.error = null;
            })
            .addCase(logoutThunk.fulfilled, (state, action) => {

                state.isAuth = false;
                state.isLoading = false;
            })
            .addCase(logoutThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ? action.payload : "Unknown error";
            })


    }

});

export const authReducer = authSlice.reducer;