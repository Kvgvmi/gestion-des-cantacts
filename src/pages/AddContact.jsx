import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function AddContact() {
  const navigate = useNavigate();

  const handleAdd = (contact) => {
    fetch('https://api.example.com/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    }).then(() => navigate('/'));
  };

  return <ContactForm onSubmit={handleAdd} />;
}

export default AddContact;
