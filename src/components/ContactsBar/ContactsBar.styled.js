import styled from 'styled-components';

export const StyledAppBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 25px;

  @media screen and (min-width: 768px) {
    align-items: center;
    height: 15%;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--white-color);
  }
`;

export const Tittle = styled.h1`
  margin-left: 15px;
  font-size: 30px;
  font-weight: 600;
  color: var(--white-color);

  & a {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    margin-left: 35px;
    font-size: 36px;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  margin-right: 25px;
  text-align: end;
`;

export const UserName = styled.p`
  font-size: 20px;
  color: var(--white-color);
`;

export const UserEmail = styled.p`
  font-size: 14px;
  color: var(--semi-white-color);
`;

export const ModalBtn = styled.button`
  margin-right: 35px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: transparent;

  & input {
    border-radius: 50%;
    outline: none;
  }
`;
