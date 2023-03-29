import ContactsItem from '../ContactsItem/ContactsItem';
import { Ul } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from '../../redux/slice/sliceContact';
import Loader from 'components/Loader/Loader';
import { filterSelector, loaderSelector } from 'redux/selector/selector';
import { errorRequestelector } from '../../redux/selector/selector';

const ContactsList = () => {
  const isLoading = useSelector(loaderSelector);
  const filterContactsSelector = useSelector(filterSelector);
  const error = useSelector(errorRequestelector);

  const arrayContact = useSelector(state =>
    state.phonebook.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filterContactsSelector)
    )
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Ul>
      {error && <div>{error}</div>}
      {isLoading && <Loader />}
      {arrayContact.map(contact => (
        <ContactsItem
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          id={contact.id}
        />
      ))}
    </Ul>
  );
};

export default ContactsList;
