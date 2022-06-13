import axios from "axios";
import {AuthApiTypes, NewsApiTypes, StatusApiTypes, UsersApiTypes} from "./apiTypes";



const instance = axios.create({

    withCredentials: true,

    headers: {
        "API-KEY": "22fd4d4a-ed6f-4cdc-8e55-7cdbae33185f"
    },

    baseURL: "https://social-network.samuraijs.com/api/1.0/",

});


export const authApi: AuthApiTypes = {
    me() {
        return instance.get("auth/me");
    },

    logout() {
        return instance.delete("auth/login");
    },
    logIn(email,password,rememberMe,captcha=false){
        return instance.post("auth/login",{
            email:email,
            password:password,
            rememberMe:rememberMe,
            captcha:captcha,

        })
    }
}


export const usersApi: UsersApiTypes = {

    getUsersProfile(userId) {
        return instance.get("profile/" + userId);
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put("profile/photo", formData, {

            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })
    },

    saveProfile(profile) {
        return instance.put("profile", profile)
    },

    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}&count=10`)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
};



export const statusApi: StatusApiTypes = {
    getStatus(userId) {

        return instance.get("profile/status/" + userId)
    },

    updateStatus(status) {
        return instance.put("profile/status", {status: status})
    },
};


export const newsApi: NewsApiTypes = {

    getNews() {
        return axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0fdc719215b146bf833044c0a0f9a859");
    }

}



