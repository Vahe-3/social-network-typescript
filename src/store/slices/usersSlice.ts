import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsersThunk} from "../thunks/usersThunks";

export interface UsersType {
    name: string | null;
    id: number | null;
    photos: {
        small: null | string;
        large: null | string;
    };
    status: null | string;
    followed: boolean;

}

interface UsersStateTypes {
    totalUsersCount: number | null;
    error: null | string;
    users: UsersType[] | null;
    isLoading: boolean;
    defaultPage: number;
}

const initialState: UsersStateTypes = {
    totalUsersCount: null,
    isLoading: false,
    users: null,
    error: null,
    defaultPage: 1,


}


const usersSlice = createSlice({
    name: "users",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getUsersThunk.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(getUsersThunk.fulfilled, (state, action) => {
                state.users = action.payload.items;
                state.totalUsersCount = action.payload.totalCount;
                state.isLoading = false;
            })
    }
});

export const usersReducer = usersSlice.reducer;