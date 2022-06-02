import React from 'react';
import styles from "./StatusFrom.module.scss"


const StatusForm:React.FC = () => {
    return (
        <div className={styles.status_form}>
            <div className={styles.status_form_input}>
                <button>OK</button>
                <input placeholder="Refresh my status" type ='text' />
            </div>

            <div className={styles.status_form_preloader}>

            </div>
        </div>
    );
};

export default StatusForm;