import React from "react";
import './App.css';

const ContactList = (props) => {
    const remove = (id) => {props.DeleteHandler(id)}
    const renderlist = props.contacts.map((contact) => {
        return (
            <div key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <button onClick={() => remove(contact.id)}>Delete</button>
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