import React from "react";
import { useSelector } from "react-redux";
import '../styles/profile.css'



function ProfilePage() {
    const contacts = useSelector((state) => {
        return state.contacts
    })
    const isActive = useSelector(state => {
        return state.isActive
    })

    return (
        <div>
            <h1>
                Профиль
            </h1>
            <div className="myContacts">
                {contacts.map((contact) => (
                    <div key={contact.id} >
                        <input className="checkbox" type="checkbox" checked={isActive} />
                        {contact.surname}&nbsp;
                        {contact.name}&nbsp;
                        {contact.patronymic}
                    </div>
                ))
                }
            </div>

        </div >
    )
};
export default ProfilePage;