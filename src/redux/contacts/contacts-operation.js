import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contatcs/addContact',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async changedContact => {
    try {
      await axios.patch(
        `/contacts/${changedContact.id}`,
        changedContact.contact
      );
      return changedContact;
    } catch (error) {
      console.log(error);
    }
  }
);
