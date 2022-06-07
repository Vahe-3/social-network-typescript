import React from 'react';
import styles from "./Main.module.scss"
import Profile from "./Profile/Profile";
import {useAppDispatch} from "../../hooks/hooks";
import {Route, Routes} from "react-router-dom";


const Main: React.FC = () => {

    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default Main;