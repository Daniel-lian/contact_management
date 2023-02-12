import React from "react";
import './App.css';

const ContactList = (props) => {
    const renderlist = props.contacts.map((contact) => {
        return (
            <div key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
            </div>
        )
    })
    return (
        <div>
            <h2>Contacts</h2>
            {renderlist}
        </div>
    )
}

export default ContactList