interface UserDataType {
    id: null | number;
    login: null | string;
    email: null | string;
}

export interface AuthStateType {

    data: UserDataType;
    isAuth: boolean;
    isLoading: boolean;
    error: null | string;
    resultCode?: number | null;

}





