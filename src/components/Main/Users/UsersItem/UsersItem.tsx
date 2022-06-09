import React, {useEffect} from 'react';
import Preloader from "../../../Preloader/Preloader";
import {UsersType} from "../../../../store/slices/usersSlice";
import User from "./User/User";
import styles from "./UsersItem.module.scss"

interface UsersItemProps {
    isLoading: boolean;
    users: UsersType[] | null;
    defaultPage: number;

}

const UsersItem: React.FC<UsersItemProps> = ({users,isLoading,defaultPage}) => {

    if(isLoading){
        return <Preloader />
    }

    return (
        <div className={styles.users_item}>
            {
                users ? users.map(u =><User user={u} />) : ""
            }

        </div>
    );
};

export default UsersItem;