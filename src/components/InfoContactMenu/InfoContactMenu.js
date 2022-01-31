import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FiSave } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { RiMessage2Fill, RiPhoneFill } from 'react-icons/ri';

import { contactsOperations } from 'redux/contacts';
import avatar from 'images/contact-avatar.png';
import * as S from './InfoContactMenu.styled';

export default function InfoContactMenu({ selectedContact, closeModal }) {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: selectedContact.name,
    number: selectedContact.number,
  });

  const handleChange = ({ target: { name, value } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleChangeContact = e => {
    e.preventDefault();
    const changedContact = { id: selectedContact.id, contact };
    dispatch(contactsOperations.changeContact(changedContact));
    toast.success(`Contact ${contact.name} has been changed.`);
    closeModal();
  };

  const handleDeleteContact = () => {
    dispatch(contactsOperations.deleteContact(selectedContact.id));
    toast.success(`Contact ${selectedContact.name} has been deleted.`);
    closeModal();
  };

  return (
    <S.Form onSubmit={handleChangeContact}>
      <S.ExitBtn type="button" onClick={closeModal}>
        <IoChevronBackOutline />
      </S.ExitBtn>

      <S.DeleteBtn type="button" onClick={handleDeleteContact}>
        <AiFillDelete />
      </S.DeleteBtn>

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
      <S.List>
        <S.Item>
          <S.Button type="button">
            <RiPhoneFill />
          </S.Button>
        </S.Item>
        <S.Item>
          <S.Button type="button">
            <RiMessage2Fill />
          </S.Button>
        </S.Item>
        <S.Item>
          <S.Button type="submit">
            <FiSave />
          </S.Button>
        </S.Item>
      </S.List>
    </S.Form>
  );
}
