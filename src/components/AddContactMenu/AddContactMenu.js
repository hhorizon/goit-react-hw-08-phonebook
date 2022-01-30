import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { IoChevronBackOutline } from 'react-icons/io5';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import avatar from 'images/contact-avatar.png';
import * as S from './AddContactMenu.styled';

export default function AddContactMenu({ closeModal, showAddModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    toast.success(`Contact ${name} has been added.`);
    setName('');
    setNumber('');
    closeModal();
  };

  return (
    <S.Form onSubmit={handleSubmit} showAddModal={showAddModal}>
      <S.ExitBtn type="button" onClick={closeModal}>
        <IoChevronBackOutline />
      </S.ExitBtn>

      <img src={avatar} alt="avatar" width={120} height={120} />

      <S.Label>
        <p>Name</p>
        <S.Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </S.Label>
      <S.Label>
        <p>Number</p>
        <S.Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </S.Label>
      <S.Button type="submit">Add</S.Button>
    </S.Form>
  );
}
