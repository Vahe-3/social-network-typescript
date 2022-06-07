export interface ProfileContactsType {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;

}

export interface ProfileTypes {
    aboutMe: string | null;
    contacts: ProfileContactsType;
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userId: number | null;
    photos: { small: string | null, large: string | null };
    resultCode?: number

}

export interface ProfileStateTypes {
    profile: ProfileTypes;
    isLoading: boolean;
    status: null | string;
    error: null | string;
    resultCode?: number;


}

export  interface ProfileFormTypes {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contacts: {
        facebook: string;
        website: string;
        vk: string;
        twitter: string;
        instagram: string;
        youtube: string;
        github: string;
        mainLink: string;
    }


}

export interface RefreshPhotoTypes {
   data: {  photos: { large: string, small: string}};
   resultCode: number;
}

export interface UsersApiTypes {
    getUsersProfile: (num: number) => Promise<{ data: ProfileTypes }>
    savePhoto: (file: any) => Promise<{ data: RefreshPhotoTypes }>
    saveProfile: (data: ProfileFormTypes) => Promise<{data:{ resultCode: number, messages: [string] }} >
}

export interface StatusApiTypes {
    getStatus: (num: number) => Promise<{data:string}>;
    updateStatus: (str: string) => Promise<{ data: { resultCode: number, } }>
}

