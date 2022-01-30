import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk(
  'contatcs/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);

      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (changedContact, thunkAPI) => {
    try {
      await axios.patch(
        `/contacts/${changedContact.id}`,
        changedContact.contact
      );

      return changedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
