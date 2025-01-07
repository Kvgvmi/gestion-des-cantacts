import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, [id]);

  const handleEdit = (updatedContact) => {
    fetch(`https://api.example.com/contacts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedContact),
    }).then(() => navigate('/'));
  };

  return contact ? <ContactForm initialData={contact} onSubmit={handleEdit} /> : null;
}

export default EditContact;
