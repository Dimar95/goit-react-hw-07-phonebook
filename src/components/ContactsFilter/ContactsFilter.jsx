import { Styled, Label, Input } from './ContactsFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/slice/sliceContact';

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(state => state.phonebook.filter);

  return (
    <Styled>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        value={filterSelector}
      />
    </Styled>
  );
};

export default ContactsFilter;
