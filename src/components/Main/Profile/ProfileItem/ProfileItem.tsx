import React, {useEffect} from 'react';
import styles from "./ProfileItem.module.scss";
import photoRef from "./../../../../icons/photoRef.png";
import profileRef from "./../../../../icons/profileRef.png";
import userPhoto from "../../../../icons/user.jpg"


interface ProfileItemsTypes {
    profileImage: string | null;
    fullName: string | null;
    userId: number | null;
    myId: number | null;
    setImage: (file: any) => void;
    editMode: boolean;
    handleEditMode: () => void;
    register: any;

}


const ProfileItem: React.FC<ProfileItemsTypes> = ({
                                                      fullName,
                                                      profileImage,
                                                      setImage,
                                                      editMode,
                                                      handleEditMode,
                                                      userId,
                                                      myId,
                                                      register
                                                  }) => {


    return (
        <>
            <div className={styles.profile_item}>
                <div className={styles.profile_name}>
                    <img src={profileImage ? profileImage : userPhoto}/>

                    {
                        editMode ? <div><input name="fullName" type="text"  {...register("fullName")}   /></div> :
                            <h1>{fullName}</h1>
                    }

                </div>

                {userId === myId ? <div className={styles.profile_photo_ref}>

                    <input onChange={setImage} type="file"/>
                    <img src={photoRef}/>

                </div> : null}

                {userId === myId ? <div className={styles.profile_info_ref}>
                    {editMode ? <button className={styles.profile_form_button}>OK</button> :
                        <img src={profileRef} onClick={handleEditMode}/>}
                </div> : null}

            </div>
        </>
    );
};

export default ProfileItem;