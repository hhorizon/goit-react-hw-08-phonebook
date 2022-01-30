import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 100%;
    height: 85vh;
    border-radius: 20px;
  }
`;

export const ExitBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 15%;
  border: none;
  background-color: transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 40%;
  }

  @media screen and (min-width: 1200px) {
    left: 61%;
  }

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

export const UserMenuList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  padding: 25px 5% 10px;
  text-align: center;
  background-image: ${props => props.theme.mainGradient};
  border-bottom-left-radius: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    height: 100%;
    padding: 0 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 340px;
  }
`;

export const Box1 = styled.ul`
  margin-bottom: 160px;

  @media screen and (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 0;
  }
`;

export const UserMenuImg = styled.li`
  margin-bottom: 15px;

  & img {
    border-radius: 50%;
  }
`;

export const UserMenuName = styled.li`
  margin-bottom: 5px;
  font-size: 20px;
  color: var(--white-color);
`;

export const UserMenuEmail = styled.li`
  padding-bottom: 10px;
  font-size: 14px;
  color: var(--semi-white-color);
  border-bottom: 1px solid var(--semi-white-color);
`;

export const Box2 = styled.ul`
  margin-bottom: 25px;
`;

export const UserMenuTheme = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--semi-white-color);

  & li:nth-child(1) button {
    /* fiolet */
    background-color: #43225e;
    margin-right: 5px;
  }

  & li:nth-child(2) button {
    /* blue */
    background-color: #45c5de;
    margin-right: 5px;
  }

  & li:nth-child(3) button {
    /* green */
    background-color: #bce464;
    margin-right: 5px;
  }

  & li:nth-child(4) button {
    /* pink */
    background-color: #fd0cb2;
    margin-right: 5px;
  }

  & li:nth-child(5) button {
    /* red */
    background-color: #ff3535;
  }

  & button {
    height: 35px;
    width: 25px;
    border: 1px solid var(--semi-white-color);
    /* border: none; */
    border-radius: 7px;
    outline: none;

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }
`;

export const UserMenuExitBtn = styled.li`
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
