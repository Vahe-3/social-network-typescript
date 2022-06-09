import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetUsersType} from "../types/profileTypes";
import {usersApi} from "../../api/api";


export const getUsersThunk = createAsyncThunk<GetUsersType, number, {rejectValue: string}>(
    'users/getUsersThunk',
    async function(page,{rejectWithValue}){

        const  response = await usersApi.getUsers(page);

        if(!response.data.error){
            return response.data
        }

        return rejectWithValue(response.data.error)

    }
)
