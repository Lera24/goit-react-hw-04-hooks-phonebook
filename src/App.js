import { useState, useEffect } from "react";
import shortid from "shortid";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts"))
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const normalizeFilter = filter.toLowerCase();
  const filterCurrentTel = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const addNewContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts([contact, ...contacts]);
  };

  const findFilterValue = (e) => {
    setFilter(e.target.value);
  };

  const removeContact = (name) => {
    setContacts(contacts.filter((prevState) => prevState.name !== name));
  };

  return (
    <div className="wrap">
      <h1 className="title">Phonebook</h1>
      <ContactForm
        filterContact={filterCurrentTel}
        onAddContact={addNewContact}
      />
      <h2 className="title">Contacts</h2>
      <Filter filter={filter} onFilter={findFilterValue} />
      <ContactList
        contacts={filterCurrentTel}
        onDeleteContact={removeContact}
      />
    </div>
  );
}
