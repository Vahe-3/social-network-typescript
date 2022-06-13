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

export interface UsersStateTypes {
    totalUsersCount: number | null;
    error: null | string;
    users: UsersType[] | null;
    isLoading: boolean;
    defaultPage: number;
    followingInProgress: number[];
}

