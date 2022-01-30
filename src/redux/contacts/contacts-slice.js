import { createSlice } from '@reduxjs/toolkit';
import * as contactsOperation from './contacts-operation';

const initialState = {
  items: [],
  filter: '',
};

const contatcsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [contactsOperation.fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
    },
    [contactsOperation.addContact.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
    },
    [contactsOperation.deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [contactsOperation.changeContact.fulfilled](state, { payload }) {
      state.items = state.items.map(item => {
        if (item.id !== payload.id) {
          return item;
        }
        return { ...item, ...payload.contact };
      });
    },
  },
});

export default contatcsSlice.reducer;
