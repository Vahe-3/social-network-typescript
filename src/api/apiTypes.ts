import {UsersType} from "../types/usersTypes";
import {ProfileFormTypes, ProfileTypes} from "../types/profileTypes";
import {AuthStateType} from "../types/authTypes";
import {NewsType} from "../types/newsTypes";

export interface RefreshPhotoTypes {
    data: { photos: { large: string, small: string } };
    resultCode: number;
}

export interface GetUsersType {
    items: UsersType[];
    totalCount: number;
    error: null | string;
}

export interface LoginGetType {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: boolean;
}

export interface UsersApiTypes {
    getUsersProfile: (num: number) => Promise<{ data: ProfileTypes }>;
    savePhoto: (file: any) => Promise<{ data: RefreshPhotoTypes }>;
    saveProfile: (data: ProfileFormTypes) => Promise<{ data: { resultCode: number, messages: [string] } }>;
    getUsers: (data: number) => Promise<{ data: GetUsersType }>;
    follow: (userId: number) => Promise<{ data: { resultCode: number } }>;
    unfollow: (userId: number) => Promise<{ data: { resultCode: number } }>;
}

export interface StatusApiTypes {
    getStatus: (num: number) => Promise<{ data: string }>;
    updateStatus: (str: string) => Promise<{ data: { resultCode: number, } }>;
}

export interface AuthApiTypes {
    me: () => Promise<{ data: AuthStateType }>;
    logout: () => Promise<{ data: { resultCode: number } }>;
    logIn: (email: string, password: string, rememberMe: boolean, captcha?: boolean) => Promise<{ data: { userId: number, resultCode: number, messages: [string] } }>;
}

export interface NewsApiTypes {
    getNews: () => Promise<{ data: { message: string, status: string; totalResults: number; articles: NewsType[] } }>;
}


