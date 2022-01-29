import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelectors } from 'redux/auth';
import { themeActions } from 'redux/theme';
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
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);

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

  const handleChangeTheme = e => {
    const { name: color } = e.target;

    switch (color) {
      case 'fiolet':
        return dispatch(
          themeActions.changeTheme({
            mainTheme: 'fiolet',
            mainGradient: 'linear-gradient(to right, #131111, #43225e)',
            mainColor: '#43225e',
          })
        );

      case 'blue':
        return dispatch(
          themeActions.changeTheme({
            mainTheme: 'blue',
            mainGradient: 'linear-gradient(to right, #84f0c7, #292acf)',
            mainColor: '#292acf',
          })
        );

      case 'green':
        return dispatch(
          themeActions.changeTheme({
            mainTheme: 'green',
            mainGradient: 'linear-gradient(to right, #bce464, #55af92)',
            mainColor: '#55af92',
          })
        );

      default:
        return;
    }
  };

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
              <button
                name="fiolet"
                onClick={e => handleChangeTheme(e)}
              ></button>
            </li>
            <li>
              <button name="blue" onClick={e => handleChangeTheme(e)}></button>
            </li>
            <li>
              <button name="green" onClick={e => handleChangeTheme(e)}></button>
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
