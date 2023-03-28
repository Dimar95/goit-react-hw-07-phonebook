import { createSlice } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addContact(state, action) {
      const newContact = {
        name: action.payload.name,
        id: action.payload.id,
        number: action.payload.number,
      };
      state.contacts.push(newContact);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterContacts(state, {payload}) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  sliceContact.actions;
