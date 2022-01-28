import { useState } from 'react';
import styled from 'styled-components';

import UserMenu from '../UserMenu/UserMenu';
import Avatar from 'images/user-avatar.png';

export default function AppBar() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <Box>
        <Tittle>Contacts</Tittle>

        <ModalBtn onClick={() => setShowModal(true)}>
          <input
            type="image"
            src={Avatar}
            alt="avatar"
            height={50}
            width={50}
          />
        </ModalBtn>
      </Box>

      {showModal && (
        <UserMenu modal={showModal} closeModal={closeModal}></UserMenu>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-image: var(--red-gradient);
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 0;
`;

const Tittle = styled.h1`
  margin-left: 15px;
`;

const ModalBtn = styled.button`
  margin-right: 35px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: transparent;

  & input {
    border-radius: 50%;
  }
`;
