import React, {ChangeEvent, useState} from 'react';
import styles from "./StatusFrom.module.scss"

interface StatusFormProps {
    setStatus: (str: string) => void;
}

const StatusForm:React.FC<StatusFormProps> = ({setStatus}) => {

  const [text, setText] = useState("");

  const handleText = (e:ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
  }

    return (
        <div className={styles.status_form}>
            <div className={styles.status_form_input}>
                <button onClick={() => setStatus(text)}>OK</button>
                <input placeholder="Refresh my status" type ='text'  value={text} onChange={handleText}/>
            </div>

            <div className={styles.status_form_preloader}>

            </div>
        </div>
    );
};

export default StatusForm;