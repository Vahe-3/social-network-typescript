import React, {useEffect} from 'react';
import styles from "./StatusItem.module.scss"


interface StatusPropsTypes {
    status: string | null;

}

const StatusItem: React.FC<StatusPropsTypes> = ({status}) => {

    return (
        <div className={styles.status_item}>
            <h1>{status ? status : "-"}</h1>

        </div>
    );
};

export default StatusItem;