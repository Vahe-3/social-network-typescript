import {createSlice} from "@reduxjs/toolkit";

import {AuthStateType} from "../types/authTypes";
import {authThunk} from "../thunks/authThunks";


const initialState: AuthStateType = {

    data: {
        id: null,
        login: null,
        email: null,

    },

    isAuth: false,
    isLoading: false,
    error: null,


}

const authSlice = createSlice({

    name: "authSlice",

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
                state.isLoading = false;
            })
    }

});

export const authReducer = authSlice.reducer;