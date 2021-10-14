import PropTypes from "prop-types";

const ContactsList = ({ list, onDelete }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <span>
              {item.name}: {item.number}
            </span>
            <button
              type="button"
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
