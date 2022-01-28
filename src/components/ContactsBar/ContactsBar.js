import { useState } from 'react';

import UserMenu from 'components/UserMenu';
import avatar from 'images/user-avatar.png';
import { StyledAppBar, Box, Tittle, ModalBtn } from './ContactsBar.styled';

export default function ContactsBar() {
  const [showUserModal, setShowUserModal] = useState(false);

  const closeUserModal = () => {
    setShowUserModal(false);
  };

  return (
    <StyledAppBar>
      <Box>
        <Tittle>Contacts</Tittle>

        <ModalBtn onClick={() => setShowUserModal(true)}>
          <input
            type="image"
            src={avatar}
            alt="avatar"
            height={50}
            width={50}
          />
        </ModalBtn>
      </Box>

      {showUserModal && <UserMenu closeModal={closeUserModal}></UserMenu>}
    </StyledAppBar>
  );
}
