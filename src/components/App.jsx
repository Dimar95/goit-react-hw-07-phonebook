import AddContact from './AddContact/AddContact';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import { AppStyled, Container, Head, ContactsStyled } from './App.styled';

const App = () => {
  return (
    <AppStyled>
      <Container>
        <Head>Phonebook</Head>
        <AddContact />
        <ContactsStyled>Contacts:</ContactsStyled>
        <ContactsFilter />
        <ContactsList />
      </Container>
    </AppStyled>
  );
};

export default App;
