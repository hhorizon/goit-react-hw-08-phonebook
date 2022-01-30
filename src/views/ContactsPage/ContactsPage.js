import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosAddCircle } from 'react-icons/io';

import ContactsBar from 'components/ContactsBar';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import Modal from 'components/Modal';
import AddContactMenu from 'components/AddContactMenu';
import InfoContactMenu from 'components/InfoContactMenu';
import { contactsOperations } from 'redux/contacts';
import * as S from './ContactsPage.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openInfoModal = selectedContact => {
    setSelectedContact(selectedContact);
  };

  const closeInfoModal = () => {
    setSelectedContact(null);
  };

  return (
    <S.Container>
      <S.ContactsWrapepr>
        <S.BarWrapper>
          <ContactsBar />

          <Filter>
            <S.AddBtn onClick={openAddModal}>
              <IoIosAddCircle />
            </S.AddBtn>
          </Filter>
        </S.BarWrapper>

        <ContactsList openInfoModal={openInfoModal} />

        {showAddModal && (
          <Modal closeModal={closeAddModal}>
            <AddContactMenu closeModal={closeAddModal} />
          </Modal>
        )}

        {selectedContact && (
          <Modal closeModal={closeInfoModal}>
            <InfoContactMenu
              closeModal={closeInfoModal}
              contact={selectedContact}
            />
          </Modal>
        )}
      </S.ContactsWrapepr>
      <S.Mess>*adaptive and responsive layout</S.Mess>
    </S.Container>
  );
}
