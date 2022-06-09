import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../icons/logo.png";
import {NavLink, useParams} from "react-router-dom";
import usersIcon from "./../../icons/users.svg";
import newsIcon from "./../../icons/news.svg";
import messagesIcon from "./../../icons/messages.svg";
import homeIcon from "./../../icons/home.svg"

const Header : React.FC  = () => {



    return (
        <div className={styles.header}>

                <div  className={styles.header_logo} >
                   <NavLink to={"/"}  ><img src={logo}/></NavLink>
                </div>

                <div  className={styles.header_title}>
                    <h2>Life Story</h2>
                </div>

                <div  className={styles.header_links}>
                    <div   className={styles.header_links_link}>
                        <NavLink to={"/profile"} >  <img src={homeIcon} /> </NavLink>
                    </div>

                    <div   className={styles.header_links_link}>
                        <NavLink to={"/messages"} >  <img src={messagesIcon} /> </NavLink>
                    </div>

                    <div   className={styles.header_links_link}>
                        <NavLink to={"/users"} > <img src={usersIcon} /> </NavLink>
                    </div>

                    <div   className={styles.header_links_link}>
                        <NavLink to={"/news"} >  <img src={newsIcon} /> </NavLink>
                    </div>

                </div>




        </div>
    );
};

export default Header;