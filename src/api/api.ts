import axios from "axios";
import {AuthApiTypes} from "../store/types/authTypes";
import {StatusApiTypes, UsersApiTypes} from "../store/types/profileTypes";


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
    }
}


export const usersApi: UsersApiTypes = {

    getUsersProfile(userId) {

        return instance.get("profile/" + userId);

    },

    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image",photoFile)
        return instance.put("profile/photo",formData,{

            headers: {
                'Content-Type': 'multipart/form-data'
            }

        })
    },

    saveProfile(profile){


        return instance.put("profile",profile)
    },
};

export const statusApi: StatusApiTypes = {
    getStatus(userId){

        return instance.get("profile/status/" + userId)
    },

    updateStatus(status){
        return instance.put("profile/status",{status:status})
    },
}


