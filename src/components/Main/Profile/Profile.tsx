import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from "./Profile.module.scss"
import ProfileItem from "./ProfileItem/ProfileItem";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import StatusItem from "./StatusItem/StatusItem";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {
    getStatusThunk,
    getUserProfileThunk, refreshProfileData,
    refreshStatusThunk,
    setProfilePhotoThunk
} from "../../../store/thunks/profileThunks";
import Preloader from "../../Preloader/Preloader";
import {useParams} from "react-router-dom";
import StatusForm from "./StatusForm/StatusForm";
import {useForm} from "react-hook-form";
import {ProfileFormTypes} from "../../../store/types/profileTypes";

//The Profile component turned out to be large, one could call it a container
const Profile = () => {

    const dispatch = useAppDispatch();
    const {userProfile, auth} = useAppSelector(state => state);
    const [editMode, setEditMode] = useState<boolean>(false);


    const {profile, status, isLoading, error} = userProfile;
    const {register, handleSubmit, setValue} = useForm<ProfileFormTypes>();
    const location = useParams();
    let myId = auth.data.id;

    let id = location.id ? +location.id : null;

    if (!id) {
        id = myId
    }

    useEffect(() => {

        if (id) {

            dispatch(getUserProfileThunk(id)).then(resp => {
                if (id) {
                    dispatch(getStatusThunk(id))
                }
            });

        }


    }, [id]);


    const setImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(setProfilePhotoThunk(e.target.files[0]))
        }
    };

    const setStatus = (text: string) => {

        if (text) {
            dispatch(refreshStatusThunk(text))
        }

    };

    const handleEditMode = () => {
        setEditMode(!editMode)
    }

    const onSubmit = (data: ProfileFormTypes) => {
        dispatch(refreshProfileData(data)).then(resp => {

            if (myId) {
                dispatch(getUserProfileThunk(myId))
            }

        });

        if (!error) {
            setEditMode(!editMode);
        }

    }


    if (isLoading) {
        return <Preloader/>
    }

    if (error) {
        alert(error)
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.profile}>

                    <ProfileItem setImage={setImage}
                                 fullName={profile.fullName}
                                 profileImage={profile.photos.large}
                                 handleEditMode={handleEditMode}
                                 editMode={editMode}
                                 register={register}
                                 userId={profile.userId}
                                 myId={auth.data.id}


                    />

                    <About aboutMe={profile.aboutMe}
                           jobDescription={profile.lookingForAJobDescription}
                           lookingJog={profile.lookingForAJob}
                           editMode={editMode}
                           register={register}
                    />

                    <Contacts register={register} editMode={editMode} contacts={profile.contacts}/>

                </div>
            </form>
            <div className={styles.profile_status}>

                {
                    profile.userId === myId ? <StatusForm setStatus={setStatus}/> : null
                }
                <StatusItem status={status}/>



            </div>


        </>
    );
};

export default Profile;