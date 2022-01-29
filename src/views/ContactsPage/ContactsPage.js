import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IoIosAddCircle } from 'react-icons/io';
import { contactsOperations } from 'redux/contacts';
import ContactsBar from 'components/ContactsBar';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Modal from 'components/Modal';
import AddContactMenu from 'components/AddContactMenu';
import {
  Container,
  BarWrapper,
  ContactsWrapepr,
  AddBtn,
} from './ContactsPage.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  });

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <Container>
      <ContactsWrapepr>
        <BarWrapper>
          <ContactsBar />
          <Filter />
          <AddBtn onClick={() => setShowAddModal(true)}>
            <IoIosAddCircle />
          </AddBtn>
        </BarWrapper>
        <ContactsList />
        {showAddModal && (
          <Modal closeModal={closeAddModal}>
            <AddContactMenu closeModal={closeAddModal} />
          </Modal>
        )}
      </ContactsWrapepr>
    </Container>
  );
}
