import {createSlice} from "@reduxjs/toolkit";
import {NewsStateTypes} from "../../types/newsTypes";
import {getNewsThunk} from "../thunks/newsThunks";



const initialState : NewsStateTypes =  {

    news: null,
    error: null,
    isLoading: false,

}

const newsSlice = createSlice({
    name: "news",
    initialState,


    reducers: {},

    extraReducers:(builder) => {
        builder
            .addCase(getNewsThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNewsThunk.fulfilled, (state,action) => {
                state.news = action.payload;
                state.isLoading = false;
            })

    }
})

export const newsReducer = newsSlice.reducer


