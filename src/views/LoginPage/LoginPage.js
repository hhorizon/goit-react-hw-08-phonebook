import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IoChevronBackOutline } from 'react-icons/io5';

import { authOperations } from 'redux/auth';
import * as S from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.email === '') {
      return toast.error('Enter email.');
    } else if (user.password === '') {
      return toast.error('Enter password.');
    }

    dispatch(authOperations.logIn(user));
    setUser({ email: '', password: '' });
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
              value={user.email}
              onChange={handleChange}
            />
          </S.Label>

          <S.Label>
            {' '}
            Password
            <S.Input
              type="password"
              name="password"
              value={user.password}
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
      <S.Mess>*adaptive and responsive layout</S.Mess>
    </S.Container>
  );
}
