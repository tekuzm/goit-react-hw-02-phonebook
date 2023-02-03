import PropTypes from 'prop-types';

// ========== styles ==========

import { Item, Bullet, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number, deleteContact }) => (
  <Item key={id}>
    <Bullet></Bullet>
    {name}: {number}
    <DeleteBtn onClick={() => deleteContact(id)} type="button">
      Delete
    </DeleteBtn>
  </Item>
);

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
