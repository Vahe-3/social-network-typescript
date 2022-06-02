import React from 'react';
import styles from "./Status.module.scss"
import StatusForm from "./StatusForm/StatusForm";

const Status = () => {
    return (
        <div className={styles.status}>
            <StatusForm />
        </div>
    );
};

export default Status;