function ContactList({ contacts, onEdit, onDelete }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => onEdit(contact)}>Modifier</button>
                <button onClick={() => onDelete(contact.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ContactList;
  