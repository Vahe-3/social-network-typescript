import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {profileReducer} from "./slices/profileSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        userProfile: profileReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;