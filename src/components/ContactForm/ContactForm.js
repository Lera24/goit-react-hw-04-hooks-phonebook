import { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

export default function ContactForm({ filterContact, onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputNameId = shortid.generate();
  const inputTelId = shortid.generate();

  const findCurrentValue = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "number":
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();

    filterContact.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : onAddContact(name, number);

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={addContact} className={css.wrap}>
      <label htmlFor={inputNameId}>
        Name
        <input
          className={css.input}
          onChange={findCurrentValue}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={inputNameId}
        />
      </label>
      <label htmlFor={inputTelId}>
        Number
        <input
          className={css.input}
          onChange={findCurrentValue}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={inputTelId}
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  filterContact: PropTypes.array,
  onAdd: PropTypes.func,
};
