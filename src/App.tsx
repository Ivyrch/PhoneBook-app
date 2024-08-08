import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { getContacts } from './services/contactApi';
import { Contact } from './types/contact';

import './App.css';
const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);


  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleContactCreated = () => {
    fetchContacts();
  };

  const handleContactDeleted = () => {
    fetchContacts();
  };

  return (
    <div className="app">
      <h1>Phone Book</h1>
      <ContactForm onContactCreated={handleContactCreated} />
      <ContactList 
      contacts={contacts} 
      onContactUpdated={fetchContacts}
      onContactDeleted={handleContactDeleted}/>
    </div>
  );
};

export default App;

