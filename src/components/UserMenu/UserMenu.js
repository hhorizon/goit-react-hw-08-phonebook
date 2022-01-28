import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelectors } from 'redux/auth';
import { ImExit } from 'react-icons/im';
import { IoChevronBackOutline } from 'react-icons/io5';
import avatar from 'images/user-avatar.png';
import {
  Backdrop,
  ExitBtn,
  UserMenuList,
  UserMenuImg,
  UserMenuName,
  UserMenuEmail,
  UserMenuTheme,
  UserMenuExitBtn,
} from './UserMenu.styled';

const modalRoot = document.querySelector('#modal-root');

export default function UserMenu({ closeModal }) {
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

  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ExitBtn onClick={closeModal}>
        <IoChevronBackOutline />
      </ExitBtn>

      <UserMenuList>
        <UserMenuImg>
          <img src={avatar} alt="avatar" height={60} width={60} />
        </UserMenuImg>
        <UserMenuName>{userName}</UserMenuName>
        <UserMenuEmail>{userEmail}</UserMenuEmail>
        <li>
          <UserMenuTheme>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
          </UserMenuTheme>
        </li>
        <UserMenuExitBtn>
          <button
            type="click"
            onClick={() => dispatch(authOperations.logOut())}
          >
            <ImExit />
          </button>
        </UserMenuExitBtn>
      </UserMenuList>
    </Backdrop>,
    modalRoot
  );
}
