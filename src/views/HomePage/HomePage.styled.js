import styled from 'styled-components';

const HomeWrapepr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0 20px;
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
    padding: 15px 100px;
    border: none;
    border-radius: 35px;
    color: var(--white-color);
    background-image: var(--red-gradient);
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export { HomeWrapepr, Tittle, NavList, NavItem };
