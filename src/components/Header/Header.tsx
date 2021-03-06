import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../icons/logo.png";
import {NavLink, useParams} from "react-router-dom";
import usersIcon from "./../../icons/users.svg";
import newsIcon from "./../../icons/news.svg";
import messagesIcon from "./../../icons/messages.svg";
import homeIcon from "./../../icons/home.svg"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {logoutThunk} from "../../store/thunks/authThunks";

const Header: React.FC = () => {

    const dispatch = useAppDispatch();
    const {isAuth, data} = useAppSelector(state => state.auth);


    return (
        <div className={styles.header}>

            <div className={styles.header_logo}>
                <NavLink to={"/"}><img src={logo}/></NavLink>
            </div>

            <div className={styles.header_title}>
                <h2>Life Story</h2>
            </div>

            {isAuth ? <div className={styles.header_links}>
                <div className={styles.header_links_link}>
                    <NavLink to={"/profile"}> <img src={homeIcon} alt="Home"/> </NavLink>
                </div>

                <div className={styles.header_links_link}>
                    <NavLink to={"/messages"}> <img src={messagesIcon} alt="Messages"/> </NavLink>
                </div>

                <div className={styles.header_links_link}>
                    <NavLink to={"/users"}> <img src={usersIcon} alt="Users"/> </NavLink>
                </div>

                <div className={styles.header_links_link}>
                    <NavLink to={"/news"}> <img src={newsIcon} alt="News"/> </NavLink>
                </div>

            </div> : null}

            {isAuth ? <div className={styles.header_logout}>

                <button onClick={() => dispatch(logoutThunk())}> Log Out</button>
                <h4>{data.email}</h4>
            </div> : null}


        </div>
    );
};

export default Header;