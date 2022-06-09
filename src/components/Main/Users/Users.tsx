import React, {useEffect, useState} from "react";
import styles from "./Users.module.scss";
import Paginator from "./Paginator/Paginator";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {getUsersThunk} from "../../../store/thunks/usersThunks";
import UsersItem from "./UsersItem/UsersItem";

const Users = () => {

    const dispatch = useAppDispatch();
    const {totalUsersCount,defaultPage,isLoading,users} = useAppSelector(state => state.users);

    useEffect(() =>{
        getUsers(defaultPage);
    }, []);


    const getUsers = (portion: number) => {

        dispatch(getUsersThunk(portion));

    };

    return (
        <div className={styles.users}>
            
            {totalUsersCount ? <Paginator defaultPage={defaultPage} totalUsersCount={totalUsersCount} getUsers={getUsers}/> : null}

            <UsersItem users={users} defaultPage={defaultPage} isLoading={isLoading}/>

        </div>
    )
};

export default Users;