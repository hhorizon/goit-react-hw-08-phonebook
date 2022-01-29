import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { contactsOperations } from 'redux/contacts';
import { IoChevronBackOutline } from 'react-icons/io5';
import { FiSave } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { RiMessage2Fill, RiPhoneFill } from 'react-icons/ri';
import avatar from 'images/contact-avatar.png';
import {
  List,
  Item,
  ExitBtn,
  DeleteBtn,
  Form,
  Label,
  Input,
  Button,
} from './InfoContactMenu.styled';

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
    <Form onSubmit={handleChangeContact}>
      <ExitBtn type="button" onClick={closeModal}>
        <IoChevronBackOutline />
      </ExitBtn>

      <DeleteBtn type="button" onClick={handleDeleteContact}>
        <AiFillDelete />
      </DeleteBtn>

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
      <List>
        <Item>
          <Button type="button">
            <RiPhoneFill />
          </Button>
        </Item>
        <Item>
          <Button type="button">
            <RiMessage2Fill />
          </Button>
        </Item>
        <Item>
          <Button type="submit">
            <FiSave />
          </Button>
        </Item>
      </List>
    </Form>
  );
}
