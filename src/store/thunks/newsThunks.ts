import {createAsyncThunk} from "@reduxjs/toolkit";
import {newsApi} from "../../api/api";
import {NewsType} from "../../types/newsTypes";


export const getNewsThunk = createAsyncThunk<NewsType[], undefined, {rejectValue: string}>(
    'users/getNewsThunk',

    async function (_, {rejectWithValue}) {

        const response = await newsApi.getNews()

        if(response.data.status === "ok"){
                return response.data.articles
        }

        return  rejectWithValue("Server Erros")


    }
)
