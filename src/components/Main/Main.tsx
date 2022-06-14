import React from 'react';
import styles from "./Main.module.scss"
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import News from "./News/News";
import {useAppSelector} from "../../hooks/hooks";
import Login from "./Login/Login";


const Main: React.FC = () => {

    const {isAuth} = useAppSelector(state => state.auth);

    if (!isAuth) {
        return <div className={styles.main_login}>
            <Login/>
        </div>
    }

    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="/profile/:id" element={<Profile/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/news" element={<News/>}/>
            </Routes>
        </div>
    );
};

export default Main;