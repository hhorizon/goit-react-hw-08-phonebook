import { Link } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
import * as S from './HomePage.styled';

export default function HomePage() {
  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <S.Container>
      <S.HomeWrapper>
        <S.Tittle>Phonebook</S.Tittle>

        <S.NavList>
          <S.NavItem>
            <Link to="/login">Login</Link>
          </S.NavItem>
          <S.NavItem>
            <Link to="/register">Sing up</Link>
          </S.NavItem>
        </S.NavList>
      </S.HomeWrapper>
    </S.Container>
  );
}
