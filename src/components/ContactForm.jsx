import { useState, useEffect } from 'react';

function ContactForm({ initialData = {}, onSubmit }) {
  const [name, setName] = useState(initialData.name || '');
  const [email, setEmail] = useState(initialData.email || '');
  const [phone, setPhone] = useState(initialData.phone || '');
  const [valid, setValid] = useState(false);

  const validate = () => {
    const isValid = email.includes('@') && !isNaN(phone) && phone.length >= 10;
    setValid(isValid);
  };

  useEffect(validate, [name, email, phone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Nom"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="Téléphone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit" disabled={!valid}>Soumettre</button>
    </form>
  );
}

export default ContactForm;
