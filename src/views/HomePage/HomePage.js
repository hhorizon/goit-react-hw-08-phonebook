import { Link } from 'react-router-dom';
import { HomeWrapepr, Tittle, NavList, NavItem } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeWrapepr>
      <Tittle>Phonebook</Tittle>

      <NavList>
        <NavItem>
          <Link to="/login">Sing in</Link>
        </NavItem>
        <NavItem>
          <Link to="/register">Sing up</Link>
        </NavItem>
      </NavList>
    </HomeWrapepr>
  );
}
