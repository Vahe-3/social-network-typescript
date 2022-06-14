import React, {ChangeEvent, useState} from 'react';
import styles from "./StatusFrom.module.scss"

interface StatusFormProps {
    setStatus: (str: string) => void;
}

const StatusForm: React.FC<StatusFormProps> = ({setStatus}) => {

    const [text, setText] = useState("");

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {

        setText(e.target.value)
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setStatus(text);
            setText("");
        }
    };

    const handleSetStatus = (): void => {
        setStatus(text);
        setText("");
    };

    return (
        <div className={styles.status_form}>
            <div className={styles.status_form_input}>
                <button onClick={handleSetStatus}>OK</button>
                <input placeholder="Refresh my status" type='text' onKeyDown={handleKeyDown} value={text}
                       onChange={handleText}/>
            </div>

            <div className={styles.status_form_preloader}>

            </div>
        </div>
    );
};

export default StatusForm;