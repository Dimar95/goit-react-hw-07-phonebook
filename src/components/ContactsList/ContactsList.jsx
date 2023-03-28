import ContactsItem from '../ContactsItem/ContactsItem';
import { Ul } from './ContactsList.styled';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  const filterSelector = useSelector(state =>
    state.phonebook.contacts.filter(({ name }) =>
      name.toLowerCase().includes(state.phonebook.filter)
    )
  );

  return (
    <Ul>
      {filterSelector.map(contact => (
        <ContactsItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </Ul>
  );
};

export default ContactsList;
