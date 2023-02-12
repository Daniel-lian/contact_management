import React, {useState} from 'react';
import './App.css';
import { Header } from './Header';
import AddContact from './addContact';

function App() {
  const [contacts, setContacts] = useState([])

  const AddHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact])
    console.log(contacts)
  }

  return (
    <div>
      <Header />
      <AddContact AddHandler = {AddHandler} />
    </div>
  );
}

export default App;
