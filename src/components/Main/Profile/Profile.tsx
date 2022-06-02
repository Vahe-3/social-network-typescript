import React from 'react';
import styles from "./Profile.module.scss"
import ProfileItem from "./ProfileItem/ProfileItem";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Status from "./Status/Status";
import StatusItem from "./Status/StatusItem/StatusItem";

const Profile = () => {
    return (
        <>
            <div className={styles.profile}>
                <ProfileItem/>
                <About/>
                <Contacts/>
            </div>
                <Status/>
                <StatusItem />
        </>
    );
};

export default Profile;