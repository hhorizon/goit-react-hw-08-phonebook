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
  left: 15%;
  border: none;
  background-color: transparent;
  outline: none;

  &:hover svg,
  &:focus svg {
    color: ${props => props.theme.mainColor};
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
  padding: 25px 5% 10px;
  text-align: center;
  background-image: ${props => props.theme.mainGradient};
  border-bottom-left-radius: 30px;
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
    background-color: var(--fiolet-color);
    margin-right: 5px;
  }

  & li:nth-child(2) button {
    background-color: var(--blue-color);
    margin-right: 5px;
  }

  & li:nth-child(3) button {
    background-color: var(--green-color);
  }

  & button {
    height: 35px;
    width: 25px;
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
  text-align: end;
  margin-right: 5px;

  & button {
    border: none;
    background-color: transparent;
    outline: none;

    &:hover svg,
    &:focus svg {
      color: ${props => props.theme.mainColor};
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
