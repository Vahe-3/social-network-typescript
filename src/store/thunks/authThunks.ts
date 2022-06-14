import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthStateType} from "../../types/authTypes";
import {authApi} from "../../api/api";
import {LoginGetType} from "../../api/apiTypes";

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


export const logoutThunk = createAsyncThunk<undefined, undefined,  {rejectValue: string}>(

    'auth/logoutThunk',

    async function (_, { rejectWithValue }) {

        const response = await authApi.logout();



        if (response.data.resultCode === 0) {
            return;
        };

        return rejectWithValue("Server error")

    }

);

export const logInThunk = createAsyncThunk<undefined,LoginGetType,  {rejectValue: string}>(

    'auth/logInThunk',

    async function (formData, { dispatch, rejectWithValue }) {


        const response = await authApi.logIn(formData.email, formData.password, formData.rememberMe);


        if (response.data.resultCode === 0) {

            dispatch(authThunk());
            return;


        }

        return rejectWithValue(response.data.messages[0] )

    }

);

