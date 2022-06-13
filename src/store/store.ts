import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {profileReducer} from "./slices/profileSlice";
import {usersReducer} from "./slices/usersSlice";
import {newsReducer} from "./slices/newsSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        userProfile: profileReducer,
        users: usersReducer,
        news: newsReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;