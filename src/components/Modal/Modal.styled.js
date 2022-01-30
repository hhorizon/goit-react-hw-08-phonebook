import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  @media screen and (min-width: 1200px) {
    position: absolute;
    width: 100%;
    border-radius: 20px;
    background-color: transparent;
  }
`;
