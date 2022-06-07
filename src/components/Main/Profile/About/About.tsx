import React from "react";
import styles from "./About.module.scss";

interface AboutMeTypes {
    aboutMe: string | null;
    jobDescription: string | null;
    lookingJog: boolean | null;
    editMode: boolean;
    register: any;

}

const About: React.FC<AboutMeTypes> = ({aboutMe, lookingJog, jobDescription, editMode, register}) => {

    return (
        <div className={styles.about}>
            <h2>About</h2>

            <div className={styles.about_info}>
                <div>
                    <h3>About me</h3>
                    {
                        editMode ?
                            <div className={styles.about_inputs}><input type={"text"} {...register("aboutMe")}/></div> :
                            <p>{aboutMe ? aboutMe : "-"}</p>
                    }

                </div>

                <div>
                    <h3>Looking for a job</h3>
                    {
                        editMode ? <div className={styles.about_inputs}><input
                                type="checkbox" {...register("lookingForAJob")}/></div> :
                            <p>{lookingJog ? <b>Yes</b> : <b>No</b>}</p>
                    }
                </div>

                <div>
                    <h3>Looking for a job description</h3>
                    {
                        editMode ? <div className={styles.about_inputs}><input
                                type="text" {...register("lookingForAJobDescription")}/></div> :
                            <p>{jobDescription ? jobDescription : "-"}</p>
                    }

                </div>

            </div>
        </div>
    )
};

export default About;