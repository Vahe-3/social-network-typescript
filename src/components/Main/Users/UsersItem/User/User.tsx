import React from 'react';
import styles from "./Users.module.scss";
import {UsersType} from "../../../../../store/slices/usersSlice";
import userPhoto from "./../../../../../icons/user.jpg";
import {NavLink} from "react-router-dom";

interface  UserPropsTypes {
    user: UsersType;
}

const User: React.FC<UserPropsTypes> = ({user}) => {

    const userName = user.name?.slice(0,20);
    let userStatus  = user.status;

    if(userStatus && userStatus.length > 20 ){
      userStatus =   userStatus.slice(0, 20) + "..."
    }


    return (
        <div className={styles.user}>
            <NavLink to={"/profile/" + user.id}>
            <div  className={styles.user_photo}>
                <img src={user.photos.large ? user.photos.large : userPhoto } alt={"user"}/>
            </div>

            <div  className={styles.user_name}>
                <h2>{userName}</h2>
            </div>

            <div  className={styles.user_status}>
                <h4>{userStatus}</h4>
            </div>
        </NavLink>
        </div>
    );
};

export default User;