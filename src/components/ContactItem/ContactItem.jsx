import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => (
  <li key={id}>
    {name}: {number}
  </li>
);

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
