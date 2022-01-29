import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IoChevronBackOutline } from 'react-icons/io5';
import { authOperations } from 'redux/auth';
import * as S from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(authOperations.logIn({ email, password }));
    }
    setEmail('');
    setPassword('');
  };

  return (
    <S.Container>
      <S.LoginWrapper>
        <S.TittleWrapper>
          <S.Tittle>Login</S.Tittle>

          <Link to="/">
            <IoChevronBackOutline />
          </Link>
        </S.TittleWrapper>

        <S.Form onSubmit={handleSubmit} autoComplete="off">
          <S.Label>
            {' '}
            Email
            <S.Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </S.Label>

          <S.Label>
            {' '}
            Password
            <S.Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </S.Label>

          <p>Forgot Password?</p>

          <S.Button type="submit">Sign in</S.Button>
        </S.Form>

        <S.RegisterRef>
          Don't have an Account? <Link to="/register">Sign Up</Link>
        </S.RegisterRef>
      </S.LoginWrapper>
    </S.Container>
  );
}
