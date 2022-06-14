import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileStateTypes} from "../../types/profileTypes";
import {getStatusThunk, getUserProfileThunk, refreshProfileData, setProfilePhotoThunk} from "../thunks/profileThunks";


const initialState: ProfileStateTypes = {
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        },

    },
    isLoading: false,
    status: null,
    error: null,

};


const profileSlice = createSlice({
        name: "profile",
        initialState,
        reducers: {
            addPost(state, action: PayloadAction<string>) {
                state.status = action.payload
            },


        },

        extraReducers: (builder) => {
            builder
                .addCase(getUserProfileThunk.pending, (state, action) => {
                    state.error = null;
                    state.isLoading = true;
                })
                .addCase(getUserProfileThunk.fulfilled, (state, action) => {
                    state.profile = action.payload;
                    state.isLoading = false;
                })
                .addCase(getUserProfileThunk.rejected, (state, action) => {
                    state.error = action.payload ? action.payload : "Unknown error";
                    state.isLoading = false;
                })

                .addCase(setProfilePhotoThunk.pending, (state) => {
                    state.error = null;
                    state.isLoading = true;
                })
                .addCase(setProfilePhotoThunk.fulfilled, (state, action) => {
                    state.isLoading = false;

                    if (state.profile) {
                        state.profile.photos.large = action.payload
                    }
                })
                .addCase(setProfilePhotoThunk.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload ? action.payload : "Unknown error";
                })

                .addCase(getStatusThunk.pending, (state) => {
                    state.error = null;
                    state.isLoading = true;

                })
                .addCase(getStatusThunk.fulfilled, (state, action) => {

                    state.isLoading = false;
                    state.status = action.payload;

                })
                .addCase(getStatusThunk.rejected, (state, action) => {
                    state.error = action.payload ? action.payload : "Unknown error";
                    state.isLoading = false;

                })

                .addCase(refreshProfileData.pending, (state) => {
                    state.error = null;
                    state.isLoading = true;

                })
                .addCase(refreshProfileData.fulfilled, (state) => {
                    state.isLoading = false;
                })
                .addCase(refreshProfileData.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload ? action.payload : "Unknown error";
                })


        }


    }
)

export const profileReducer = profileSlice.reducer;
export const {addPost} = profileSlice.actions;
