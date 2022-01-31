import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { IoChevronBackOutline } from 'react-icons/io5';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import avatar from 'images/contact-avatar.png';
import * as S from './AddContactMenu.styled';

export default function AddContactMenu({ closeModal }) {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleChange = ({ target: { name, value } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name } = contact;
    if (contacts.find(contact => contact.name === name)) {
      return toast.error(`${name} is already in contacts.`);
    }
    dispatch(contactsOperations.addContact(contact));
    toast.success(`Contact ${name} has been added.`);
    closeModal();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
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
          value={contact.name}
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
          value={contact.number}
          onChange={handleChange}
        />
      </S.Label>
      <S.Button type="submit">Add</S.Button>
    </S.Form>
  );
}
