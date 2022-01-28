import styled from 'styled-components';

const StyledAppBar = styled.div`
  position: relative;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
`;

const Tittle = styled.h1`
  margin-left: 15px;
  font-size: 30px;
  font-weight: 600;
  color: var(--white-color);
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

export { StyledAppBar, Box, Tittle, ModalBtn };
