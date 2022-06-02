import React from "react";
import styles from "./About.module.scss"

const About: React.FC = () => {

    return (
        <div className={styles.about}>
            <h2>About</h2>

            <div className={styles.about_info}>
                <div>
                    <h3>About me</h3>
                    <p>Im frontend dev</p>
                </div>

                <div >
                    <h3>Looking for a job</h3>
                    <p>Im frontend dev</p>
                </div>

                <div >
                    <h3>Looking for a job description</h3>
                    <p>Im frontend dev</p>
                </div>

            </div>
        </div>
    )
};

export default About;