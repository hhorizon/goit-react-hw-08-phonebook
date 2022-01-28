import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { contactsOperations } from 'redux/contacts';
import { IoChevronBackOutline } from 'react-icons/io5';
import avatar from 'images/contact-avatar.png';
import {
  Backdrop,
  ExitBtn,
  Form,
  Label,
  Input,
  Button,
} from './AddModal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function AddModal({ closeModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
    dispatch(contactsOperations.addContact({ name, number }));
    setName('');
    setNumber('');
    closeModal();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
        console.log('esc');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Form onSubmit={handleSubmit}>
        <ExitBtn onClick={closeModal}>
          <IoChevronBackOutline />
        </ExitBtn>

        <img src={avatar} alt="avatar" width={120} height={120} />

        <Label>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <p>Number</p>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Add</Button>
      </Form>
    </Backdrop>,
    modalRoot
  );
}
