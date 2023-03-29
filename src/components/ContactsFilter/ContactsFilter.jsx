import { Styled, Label, Input } from './ContactsFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/slice/sliceContact';
import { filterSelector } from 'redux/selector/selector';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterContactsSelector = useSelector(filterSelector);

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Styled>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleChange}
        value={filterContactsSelector}
      />
    </Styled>
  );
};

export default ContactsFilter;
