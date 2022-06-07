import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileFormTypes, ProfileTypes, RefreshPhotoTypes} from "../types/profileTypes";
import {statusApi, usersApi} from "../../api/api";
import {addPost} from "../slices/profileSlice";


export const getUserProfileThunk = createAsyncThunk<ProfileTypes, number, { rejectValue: string }>(
    'getUserProfileThunk',

    async function (userId, {rejectWithValue}) {

        const response = await usersApi.getUsersProfile(userId);

        if (response.data) {
            return response.data;
        }

        return rejectWithValue("Some Error");


    }
);

export const setProfilePhotoThunk = createAsyncThunk<string, any, { rejectValue: string }>(
    'profile/setProfilePhotoThunk',
    async function (file, {rejectWithValue}) {

        const response = await usersApi.savePhoto(file);

        if (response.data.resultCode === 0) {
            return response.data.data.photos.large;
        }

        return rejectWithValue("Some Error")

    }
);


export const getStatusThunk = createAsyncThunk<string, number, { rejectValue: string }>(
    'profile/getStatusThunk',

    async function (userId, {rejectWithValue}) {

        const response = await statusApi.getStatus(userId);

        if (response.data || response.data === null) {
            return response.data;
        }

        return rejectWithValue("Some Error")

    }
);


export const refreshStatusThunk = createAsyncThunk<undefined, string, { rejectValue: string }>(
    'profile/refreshStatusThunk',

    async function (status, {rejectWithValue, dispatch}) {

        const response = await statusApi.updateStatus(status);

        if (response.data.resultCode === 0) {

            //Dubious solution, but the server is not working properly
            dispatch(addPost(status));
            return;
        }

        return rejectWithValue("Some Error")

    }
);

export const refreshProfileData = createAsyncThunk<undefined , ProfileFormTypes, { rejectValue: string }>(

    'profile/refreshProfileData',
    async function ( data,{rejectWithValue}) {

        const response = await usersApi.saveProfile(data);

        if(response.data.resultCode === 0){
            return;
        }

        return rejectWithValue(response.data.messages[0]);


    }
);