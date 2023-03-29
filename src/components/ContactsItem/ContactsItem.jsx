import PropTypes from 'prop-types';
import {
  Li,
  Button,
  PhoneStyle,
  Name,
  ContainerOneContact,
} from './ContactsItem.styled';
import { deleteContact } from '../../redux/slice/sliceContact';
import { useDispatch } from 'react-redux';

const ContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <Li>
      <ContainerOneContact>
        <Name>{name}</Name>
        <PhoneStyle>{phone}</PhoneStyle>
      </ContainerOneContact>
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Button>
    </Li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
