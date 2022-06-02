import React from 'react';
import styles from "./ProfileItem.module.scss";
import photoRef from "./../../../../icons/photoRef.png";
import profileRef from "./../../../../icons/profileRef.png";


const ProfileItem:React.FC = () => {
    return (
        <>
        <div className={styles.profile_item}>
            <div>
                <img src={"https://social-network.samuraijs.com/activecontent/images/users/20832/user.jpg?v=15"} />
                <h1>Vahe Avetisyan</h1>


            </div>

            <div className={styles.profile_photo_ref}>
                <input type="file"  />
                <img src={photoRef} />

            </div>

            <div  className={styles.profile_info_ref}>
                <img src={profileRef} />
            </div>




        </div>
            <div className={styles.profile_preloader}>

            </div>
        </>
    );
};

export default ProfileItem;