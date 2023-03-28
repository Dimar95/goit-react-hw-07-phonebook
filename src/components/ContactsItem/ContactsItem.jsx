import PropTypes from 'prop-types';
import { Li, Button } from './ContactsItem.styled';
import { deleteContact } from '../../redux/slice/sliceContact';
import { useDispatch } from 'react-redux';

const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Li>
      {name} {number}
      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        delete
      </Button>
    </Li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
