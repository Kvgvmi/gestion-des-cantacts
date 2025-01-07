import { useState, useEffect } from 'react';
import ContactList from '../components/ContactList';

function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/contacts')
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return <ContactList contacts={contacts} />;
}

export default Home;
