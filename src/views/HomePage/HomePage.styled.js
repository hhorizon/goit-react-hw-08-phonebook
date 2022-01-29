import styled from 'styled-components';
import fone768 from 'images/fone-768.jpg';

const Container = styled.div`
  padding: 0 20px;
  background-image: url(${fone768});
  background-size: cover;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }
`;

const Tittle = styled.h1`
  margin-top: 40px;
  font-size: 38px;
  font-weight: 600;
  color: var(--white-color);
`;

const NavList = styled.ul`
  margin-bottom: 125px;
  text-align: center;
`;

const NavItem = styled.li`
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

export { Container, HomeWrapper, Tittle, NavList, NavItem };
