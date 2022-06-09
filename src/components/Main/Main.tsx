import React from 'react';
import styles from "./Main.module.scss"
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import News from "./News/News";


const Main: React.FC = () => {

    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/users" element={<Users />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </div>
    );
};

export default Main;