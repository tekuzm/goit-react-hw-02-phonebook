import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

// ========== components ==========

import ContactItem from 'components/ContactItem/ContactItem';

// ========== styles ==========

import { List, Wrap, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Wrap key={nanoid()}>
        <ContactItem key={id} name={name} number={number} />
        <DeleteBtn onClick={() => deleteContact(id)} type="button">
          Delete
        </DeleteBtn>
      </Wrap>
    ))}
  </List>
);

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
