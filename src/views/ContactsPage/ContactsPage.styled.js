import styled from 'styled-components';
import fone1200 from 'images/fone-1200.jpg';

export const Container = styled.div`
  @media screen and (min-width: 480px) {
    background-image: url(${fone1200});
    background-size: cover;
    height: 100vh;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ContactsWrapepr = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (min-width: 480px) {
    position: relative;
    width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    height: 85vh;
    width: 768px;
    margin: auto;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${props => props.theme.mainGradient};

  @media screen and (min-width: 768px) {
    position: relative;
    height: 100%;
    border-radius: 20px;
  }
`;

export const AddBtn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: auto;
    right: 10px;
    top: 10px;
    z-index: 0;
  }

  @media screen and (min-width: 1200px) {
    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }

  & svg {
    color: #0ae762;
    width: 60px;
    height: 60px;

    @media screen and (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Mess = styled.p`
  position: fixed;
  bottom: 10px;
  right: 10px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
