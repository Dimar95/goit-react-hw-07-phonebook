import { configureStore } from '@reduxjs/toolkit';
import { sliceContact } from '../slice/sliceContact';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedContacts = persistReducer(persistConfig, sliceContact.reducer);

export const store = configureStore({
  reducer: {
    phonebook: persistedContacts,  },
      middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })}

});

export const persistor = persistStore(store);
