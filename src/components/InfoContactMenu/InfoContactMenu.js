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

export default function InfoContactMenu({ contact, closeModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

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

  const handleChangeContact = e => {
    e.preventDefault();
    const changedContact = { id: contact.id, contact: { name, number } };
    dispatch(contactsOperations.changeContact(changedContact));
    toast.success(`Contact ${name} has been changed.`);
    closeModal();
  };

  const handleDeleteContact = () => {
    dispatch(contactsOperations.deleteContact(contact.id));
    toast.success(`Contact ${contact.name} has been deleted.`);
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
