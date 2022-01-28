import styled from 'styled-components';

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
  top: 20px;
  left: 20%;
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
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  padding: 15px 5%;
  text-align: center;
  background-image: var(--red-gradient);
  border-bottom-left-radius: 50px;
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
  margin-bottom: 160px;
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

export {
  Backdrop,
  ExitBtn,
  UserMenuList,
  UserMenuImg,
  UserMenuName,
  UserMenuEmail,
  UserMenuTheme,
  UserMenuExitBtn,
};
