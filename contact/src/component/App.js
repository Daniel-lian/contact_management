import React, {useState, useEffect} from 'react';
import './App.css';
import { Header } from './Header';
import AddContact from './addContact';
import ContactList from './contactList';

function App() {
  const storageKey = 'contacts'
  const storedData = JSON.parse(localStorage.getItem(storageKey))
  const [contacts, setContacts] = useState(storedData? storedData : [])


  const AddHandler = (contact) => {
    setContacts([...contacts, contact])
  }

  // store data in local storage
  useEffect(() => {localStorage.setItem(storageKey, JSON.stringify(contacts))}, [contacts])

  return (
    <div>
      <Header />
      <AddContact AddHandler = {AddHandler} />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
