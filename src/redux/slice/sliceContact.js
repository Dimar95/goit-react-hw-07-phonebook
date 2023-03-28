import { createSlice } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      ],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    addContact(state, action) {
      const newContact = {
        name: action.payload.name,
        id: action.payload.id,
        number: action.payload.number,
      };
      state.contacts.items.push(newContact);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  sliceContact.actions;
