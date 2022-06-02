import React from 'react';
import styles from "./Main.module.scss"
import Profile from "./Profile/Profile";

const Main: React.FC = () => {
    return (
        <div className={styles.main}>
            <Profile />
        </div>
    );
};

export default Main;