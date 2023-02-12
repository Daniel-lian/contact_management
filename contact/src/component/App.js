import React, {useState} from 'react';
import './App.css';
import { Header } from './Header';
import AddContact from './addContact';
import ContactList from './contactList';

function App() {
  const [contacts, setContacts] = useState([])

  const AddHandler = (contact) => {
    setContacts([...contacts, contact])
    console.log(contacts)
  }

  return (
    <div>
      <Header />
      <AddContact AddHandler = {AddHandler} />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
