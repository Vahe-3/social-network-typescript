import {createAsyncThunk} from "@reduxjs/toolkit";
import {usersApi} from "../../api/api";
import {GetUsersType} from "../../api/apiTypes";


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

export const followUserThunk = createAsyncThunk<number, number, {rejectValue: string}>(
    'users/followUserThunk',
    async function(userId,{rejectWithValue, dispatch}){


        const  response = await usersApi.follow(userId);

        if(response.data.resultCode === 0){
            return userId;
        }

        return rejectWithValue("Server error")

    }
)


export const unfollowUserThunk = createAsyncThunk<number, number, {rejectValue: string}>(
    'users/unfollowUserThunk',
    async function(userId,{rejectWithValue}){

        const  response = await usersApi.unfollow(userId);

        if(response.data.resultCode === 0){
            return userId;
        }

        return rejectWithValue("Server error")

    }
)

