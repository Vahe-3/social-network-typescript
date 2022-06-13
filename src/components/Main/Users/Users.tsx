import React, {useEffect, useState} from "react";
import styles from "./Users.module.scss";
import Paginator from "./Paginator/Paginator";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {followUserThunk, getUsersThunk, unfollowUserThunk} from "../../../store/thunks/usersThunks";
import UsersItem from "./UsersItem/UsersItem";
import {addFollowInProgressUsers} from "../../../store/slices/usersSlice";

const Users = () => {

    const dispatch = useAppDispatch();
    const {totalUsersCount,defaultPage,isLoading,users,followingInProgress} = useAppSelector(state => state.users);

    useEffect(() =>{
        getUsers(defaultPage);
    }, []);


    const getUsers = (portion: number) => {

        dispatch(getUsersThunk(portion));

    };

    const followUser = (userId: number, follow: boolean) => {

        dispatch(addFollowInProgressUsers(userId));
        if(follow){
            dispatch(unfollowUserThunk(userId))
        } else {
            dispatch(followUserThunk(userId))
        }

    }

    return (
        <div className={styles.users}>
            
            {totalUsersCount ? <Paginator defaultPage={defaultPage} totalUsersCount={totalUsersCount} getUsers={getUsers}/> : null}

            <UsersItem followingInProgress={followingInProgress} followUser={followUser} users={users} defaultPage={defaultPage} isLoading={isLoading}/>

        </div>
    )
};

export default Users;