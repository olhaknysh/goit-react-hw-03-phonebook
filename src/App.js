import { useState } from 'react';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleSubmit = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleFilter = value => {
    setFilter(value);
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const visibleContacts = () => {
    console.log(123);
    const normalisedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalisedFilter),
    );
    return visibleContacts;
  };

  const checkPossibleRepeat = newName => {
    const isNameExist = !!contacts.find(contact => contact.name === newName);

    if (isNameExist) {
      alert(`${newName} is already in contacts.`);
    }
    return isNameExist;
  };

  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} onCheckNames={checkPossibleRepeat} />

      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilter} />
      <ContactList contacts={visibleContacts()} onDelete={handleDelete} />
    </section>
  );
};

export default App;
