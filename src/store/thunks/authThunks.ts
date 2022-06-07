import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthStateType} from "../types/authTypes";
import {authApi} from "../../api/api";

export  const authThunk =  createAsyncThunk<AuthStateType, undefined, {rejectValue: string}>(
    "authThunk",
    async  function (_, thunkAPI){
        const response = await authApi.me();

        if(response.data.resultCode === 0){
            return response.data
        }

        return thunkAPI.rejectWithValue("Some Error")

    }
)
