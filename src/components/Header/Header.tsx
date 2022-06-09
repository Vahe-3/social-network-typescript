import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../icons/logo.png";
import {NavLink} from "react-router-dom";


const Header : React.FC  = () => {
    return (
        <div className={styles.header}>

                <div>
                   <NavLink to={"/"} ><img src={logo}/></NavLink>
                    <NavLink to={"/users"} > Users </NavLink>
                </div>
                <div>
                    <h2>Life Story</h2>
                </div>



        </div>
    );
};

export default Header;