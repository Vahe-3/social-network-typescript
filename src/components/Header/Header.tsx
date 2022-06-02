import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../icons/logo.png";


const Header : React.FC  = () => {
    return (
        <div className={styles.header}>

                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <h2>Life Story</h2>
                </div>



        </div>
    );
};

export default Header;