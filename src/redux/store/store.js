import { configureStore } from '@reduxjs/toolkit';
import { sliceContact } from '../slice/sliceContact';

export const store = configureStore({
  reducer: {
    phonebook: sliceContact.reducer,

  },

});
