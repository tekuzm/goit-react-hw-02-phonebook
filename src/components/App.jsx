import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// ========== components ==========

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.isDuplicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(4),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });

    return true;
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  }

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  };

  isDuplicate = name => {
    const normalizedName = name.toLowerCase();

    const { contacts } = this.state;
    const contact = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(contact);
  };

  render() {
    const contacts = this.getFilteredContacts();
    const isContacts = Boolean(contacts.length);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          checkIsDuplicate={this.isDuplicate}
        />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleFilter} />
        {isContacts ? (
          <ContactList deleteContact={this.deleteContact} contacts={contacts} />
        ) : (
          <p>No contacts in the list. Please add one!</p>
        )}
      </div>
    );
  }
}

export default App;
