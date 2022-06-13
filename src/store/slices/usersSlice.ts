import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {followUserThunk, getUsersThunk, unfollowUserThunk} from "../thunks/usersThunks";
import {UsersStateTypes} from "../../types/usersTypes";
import users from "../../components/Main/Users/Users";


const initialState: UsersStateTypes = {
    totalUsersCount: null,
    isLoading: false,
    users: null,
    error: null,
    defaultPage: 1,
    followingInProgress: [],


}


const usersSlice = createSlice({
    name: "users",
    initialState,

    reducers: {
        addFollowInProgressUsers: (state, action:  PayloadAction<number>) => {
            state.followingInProgress.push(action.payload);
        }
    },

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


            .addCase(followUserThunk.pending, (state,) => {


            })

            .addCase(followUserThunk.fulfilled, (state, action) => {

                state.followingInProgress = state.followingInProgress.filter(id => id !== action.payload);
                if (state.users) {
                    const user = state.users.find(user => user.id === action.payload);

                    if (user) {

                        user.followed = true;
                    }

                }
            })

            .addCase(unfollowUserThunk.pending, (state) => {


            })

            .addCase(unfollowUserThunk.fulfilled, (state, action) => {

                state.followingInProgress = state.followingInProgress.filter(id => id !== action.payload);
                if (state.users) {
                    const user = state.users.find(user => user.id === action.payload);
                    if (user) {
                        user.followed = false
                    }

                }
            })

    }
});

export const usersReducer = usersSlice.reducer;
export const {addFollowInProgressUsers} = usersSlice.actions;