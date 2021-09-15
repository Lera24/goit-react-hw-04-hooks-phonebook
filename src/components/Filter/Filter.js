import shortid from "shortid";
import PropTypes from "prop-types";
import css from "./Filter.module.css";

export default function Filter({ filter, onFilter }) {
  const inputFilterId = shortid.generate();

  return (
    <label htmlFor={inputFilterId}>
      Find contacts by name
      <input
        className={css.input}
        onChange={onFilter}
        type="text"
        value={filter}
        id={inputFilterId}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
