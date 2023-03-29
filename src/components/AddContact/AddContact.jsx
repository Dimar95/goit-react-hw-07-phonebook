import React, { useState } from 'react';
import { AddContactStyled, Label, Input, Button } from './AddContact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/slice/sliceContact';
import { nanoid } from 'nanoid';
import { itemsSelector } from 'redux/selector/selector';

const AddContact = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const contactSelector = useSelector(itemsSelector);

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'phone':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setPhone('');
    setName('');
  };

  const onAddContact = ({ name, phone }) => {
    if (
      contactSelector.find(obj => obj.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, phone, id: nanoid() }));
    reset();
  };

  return (
    <>
      <AddContactStyled
        onSubmit={e => {
          e.preventDefault();
          onAddContact({ name, phone });
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
        <Label htmlFor="phone">
          Number
          <Input
            onChange={onChange}
            value={phone}
            type="tel"
            name="phone"
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
