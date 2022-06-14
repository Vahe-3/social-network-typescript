import React, {useEffect} from 'react';
import Preloader from "../../../Preloader/Preloader";
import User from "./User/User";
import styles from "./UsersItem.module.scss"
import {UsersType} from "../../../../types/usersTypes";


interface UsersItemProps {
    isLoading: boolean;
    users: UsersType[] | null;
    defaultPage: number;
    followingInProgress: number[];
    followUser: (userId: number, followed: boolean) => void;

}

const UsersItem: React.FC<UsersItemProps> = ({users,isLoading,followUser,followingInProgress}) => {



    if(isLoading){
        return <Preloader />
    }

    return (
        <div className={styles.users_item}>
            {
                users ? users.map(u =><User key={u.id} followingInProgress={followingInProgress}  followUser={followUser} user={u} />) : ""
            }

        </div>
    );
};

export default UsersItem;