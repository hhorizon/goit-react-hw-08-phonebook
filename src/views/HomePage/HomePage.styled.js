import styled from 'styled-components';
import fone768 from 'images/fone-768.jpg';
import fone1200 from 'images/fone-1200.jpg';

export const Container = styled.div`
  padding: 0 20px;
  background-image: url(${fone768});
  background-size: cover;

  @media screen and (min-width: 768px) {
    display: flex;
    background-image: url(${fone1200});
    height: 100vh;
    padding: 0;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 80vh;
    border-radius: 20px;
    background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    );
  }

  @media screen and (min-width: 1200px) {
    width: 1100px;
  }
`;

export const Tittle = styled.h1`
  margin-top: 40px;
  font-size: 38px;
  font-weight: 600;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-left: 80px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 60px;
    margin-left: 160px;
    font-size: 42px;
  }
`;

export const NavList = styled.ul`
  margin-bottom: 125px;
  text-align: center;
`;

export const NavItem = styled.li`
  &:last-child {
    margin-top: 25px;
  }

  & a {
    display: inline-block;
    padding: 15px 0;
    width: 250px;
    border: none;
    border-radius: 35px;
    color: var(--white-color);
    background-image: ${props => props.theme.mainGradient};
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
