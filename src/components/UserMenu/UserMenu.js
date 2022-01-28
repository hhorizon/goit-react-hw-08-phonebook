import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelectors } from 'redux/auth';
import { ImExit } from 'react-icons/im';
import { IoChevronBackOutline } from 'react-icons/io5';
import Avatar from 'images/user-avatar.png';

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

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ExitBtn onClick={closeModal}>
        <IoChevronBackOutline />
      </ExitBtn>

      <UserMenuList>
        <UserMenuImg>
          <img src={Avatar} alt="avatar" height={60} width={60} />
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
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ExitBtn = styled.button`
  position: fixed;
  top: 35px;
  left: 40%;
  border: none;
  background-color: transparent;
  outline: none;

  &:hover svg,
  &:focus svg {
    color: var(--red-main-color);
    transform: scale(1.5);
  }

  & svg {
    height: 35px;
    width: 35px;
    color: var(--semi-white-color);
  }
`;

const UserMenuList = styled.ul`
  border: 1px solid;
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  padding: 15px 5%;
  text-align: center;
  background-image: var(--red-gradient);

  & > li {
    /* font-size: 20px; */
    /* border-bottom: 1px solid; */
    /* color: var(--white-color); */
    /* padding: 5px 0; */
  }
`;

const UserMenuImg = styled.li`
  margin-bottom: 15px;

  & img {
    border-radius: 50%;
  }
`;

const UserMenuName = styled.li`
  margin-bottom: 5px;
  font-size: 20px;
  color: var(--white-color);
`;

const UserMenuEmail = styled.li`
  margin-bottom: 60px;
  padding-bottom: 10px;
  font-size: 14px;
  color: var(--semi-white-color);
  border-bottom: 1px solid var(--semi-white-color);
`;

const UserMenuTheme = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  padding-bottom: 10px;
  border-bottom: 1px solid var(--semi-white-color);

  & li:nth-child(1) button {
    background-color: var(--red-main-color);
    margin-right: 5px;
  }

  & li:nth-child(2) button {
    background-color: var(--green-main-color);
    margin-right: 5px;
  }

  & li:nth-child(3) button {
    background-color: var(--blue-main-color);
  }

  & button {
    height: 30px;
    width: 30px;
    border: none;
    border-radius: 7px;
    outline: none;

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;

const UserMenuExitBtn = styled.li`
  & button {
    border: none;
    background-color: transparent;
    outline: none;

    &:hover svg,
    &:focus svg {
      color: var(--red-main-color);
      transform: scale(1.3);
    }

    & svg {
      height: 25px;
      width: 25px;
      color: var(--semi-white-color);
    }
  }
`;
