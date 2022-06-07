import React from "react";
import styles from "./Contacts.module.scss";
import {ProfileContactsType} from "../../../../store/types/profileTypes";


interface ContactsTypes {
    contacts: ProfileContactsType;
    editMode: boolean;
    register: any;
}

const Contacts: React.FC<ContactsTypes> = ({contacts, editMode, register}) => {

    let contactsInArray = Object.keys(contacts);

    return (
        <div className={styles.contacts}>
            <h2>Contacts</h2>

            <div className={styles.contacts_item}>

                {
                    contactsInArray.map(key => {


                        return <div  key={key}>
                            <h3>{key}</h3>
                            {
                                editMode ? <input type="text" {...register("contacts." + key)} /> :
                                    //@ts-ignore
                                    <a href={contacts[key] ? contacts[key] : undefined}>{contacts[key] ? contacts[key] : "-"}</a>

                            }
                        </div>
                    })
                }

            </div>


        </div>
    )
};

export default Contacts;