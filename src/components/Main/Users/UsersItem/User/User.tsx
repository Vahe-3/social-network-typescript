import React from 'react';
import styles from "./Users.module.scss";
import userPhoto from "./../../../../../icons/user.jpg";
import addFriendIcon from "./../../../../../icons/addFriendIcon.svg";
import delFriendIcon from "./../../../../../icons/delFriendIcon.svg";
import {NavLink} from "react-router-dom";
import {UsersType} from "../../../../../types/usersTypes";


interface UserPropsTypes {
    user: UsersType;
    followingInProgress: number[];
    followUser: (userId: number, follow: boolean) => void;

}

const User: React.FC<UserPropsTypes> = ({user, followUser,followingInProgress}) => {

    const userName = user.name?.slice(0, 20);
    let userStatus = user.status;

    if (userStatus && userStatus.length > 20) {
        userStatus = userStatus.slice(0, 20) + "..."
    }

    const isDisabled = followingInProgress.find(id => id === user.id) === user.id ;



    return (
        <div className={styles.user}>
            <NavLink to={"/profile/" + user.id}>
                <div className={styles.user_photo}>
                    <img src={user.photos.large ? user.photos.large : userPhoto} alt={"user"}/>
                </div>

                <div className={styles.user_name}>
                    <h2>{userName}</h2>
                </div>

                <div className={styles.user_status}>
                    <h4>{userStatus ? userStatus : "-"}</h4>
                </div>
            </NavLink>
            <div className={styles.user_button}>
                <button disabled={isDisabled }  onClick={() => {
                    if(user.id)followUser(user.id , user.followed);

                }}><img
                    src={user.followed ? delFriendIcon : addFriendIcon} alt="add friend icon"/></button>
            </div>


        </div>
    );
};

export default User;