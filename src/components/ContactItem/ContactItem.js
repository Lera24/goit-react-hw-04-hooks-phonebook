import PropTypes from "prop-types";
import css from "./ContactItem.module.css";

export default function ContactItem({ name, number, onDeleteNumber }) {
  return (
    <li className={css.item}>
      <span className={css.name}>{`${name}:`}</span>
      <span className={css.number}>{number}</span>
      <button
        type="submit"
        className={css.button}
        onClick={() => onDeleteNumber(name)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteNumber: PropTypes.func,
};
