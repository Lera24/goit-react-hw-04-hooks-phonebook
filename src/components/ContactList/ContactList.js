import PropTypes from "prop-types";
import { Fragment } from "react/cjs/react.production.min";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Fragment key={contact.id}>
            <ContactItem
              name={contact.name}
              number={contact.number}
              onDeleteNumber={onDeleteContact}
            />
          </Fragment>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
