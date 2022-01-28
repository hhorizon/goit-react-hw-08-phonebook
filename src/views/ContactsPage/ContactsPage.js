import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { IoIosAddCircle } from 'react-icons/io';
import { contactsOperations } from 'redux/contacts';
import ContactsBar from 'components/ContactsBar';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import AddModal from 'components/AddModal';

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
        <ThemeWrapper>
          <ContactsBar />
          <Filter />
          <AddBtn onClick={() => setShowAddModal(true)}>
            <IoIosAddCircle />
          </AddBtn>
        </ThemeWrapper>
        <ContactsList />
        {showAddModal && <AddModal closeModal={closeAddModal} />}
      </ContactsWrapepr>
    </Container>
  );
}

const Container = styled.div``;

const ThemeWrapper = styled.div`
  background-image: var(--red-gradient);
`;

const ContactsWrapepr = styled.div`
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
`;

const AddBtn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border: none;
  background-color: transparent;

  & svg {
    color: var(--red-main-color);
    width: 60px;
    height: 60px;
  }
`;
