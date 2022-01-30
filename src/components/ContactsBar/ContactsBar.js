import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import avatar from 'images/user-avatar.png';
import * as S from './ContactsBar.styled';

import { useMediaQuery } from 'react-responsive';
export default function ContactsBar() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const [showUserModal, setShowUserModal] = useState(false);

  const closeUserModal = () => {
    setShowUserModal(false);
  };

  return (
    <S.StyledAppBar>
      <S.Tittle>
        <Link to="/">Contacts</Link>
      </S.Tittle>

      <S.Box>
        {isDesktop && (
          <S.UserInfo>
            <S.UserName>{userName}</S.UserName>
            <S.UserEmail>{userEmail}</S.UserEmail>
          </S.UserInfo>
        )}

        <S.ModalBtn onClick={() => setShowUserModal(true)}>
          <input
            type="image"
            src={avatar}
            alt="avatar"
            height={50}
            width={50}
          />
        </S.ModalBtn>
      </S.Box>

      {showUserModal && <UserMenu closeModal={closeUserModal}></UserMenu>}
    </S.StyledAppBar>
  );
}
