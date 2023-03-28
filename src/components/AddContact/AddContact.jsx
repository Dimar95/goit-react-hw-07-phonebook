import React, { useState } from 'react';
import { AddContactStyled, Label, Input, Button } from './AddContact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/slice/sliceContact';
import { nanoid } from 'nanoid';

const AddContact = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const contactSelector = useSelector(state => state.phonebook.contacts);

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setNumber('');
    setName('');
  };
  const onAddContact = ({ name, number }) => {
    if (
      contactSelector.find(obj => obj.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
  };
  return (
    <>
      <AddContactStyled
        onSubmit={e => {
          e.preventDefault();
          onAddContact({ name, number });
          reset();
        }}
      >
        <Label htmlFor="name">
          Name
          <Input
            onChange={onChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            onChange={onChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </AddContactStyled>
    </>
  );
};
export default AddContact;
