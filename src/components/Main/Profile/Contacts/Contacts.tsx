import React from "react";
import styles from "./Contacts.module.scss"

const Contacts:React.FC = () => {

    return (
        <div className={styles.contacts}>
            <h2>Contacts</h2>

            <div className={styles.contacts_item}>


                <div>
                    <h3>Facebook</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>


                <div>
                    <h3>Website</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>


                <div>
                    <h3>VK</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>


                <div>
                    <h3>Twitter</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>

                <div>
                    <h3>Instagram</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>


                <div>
                    <h3>YouTube</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>


                <div>
                    <h3>GitHub</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>


                <div>
                    <h3>MainLink</h3>
                    <a href="https://www.facebook.com/">Facebook</a>
                </div>
            </div>


        </div>
    )
};

export default Contacts;