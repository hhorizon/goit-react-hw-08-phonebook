import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

import { authOperations } from 'redux/auth';
import * as S from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <S.Container>
      <S.RegisterWrapper>
        <S.TittleWrapper>
          <S.Tittle>Sign up</S.Tittle>

          <Link to="/">
            <IoChevronBackOutline />
          </Link>
        </S.TittleWrapper>

        <S.Form onSubmit={handleSubmit}>
          <S.Label>
            Name
            <S.Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </S.Label>

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

          <S.LabelAgree>
            <input type="checkbox" required />I Read and agree to{' '}
            <span>terms & Conditions</span>
          </S.LabelAgree>

          <S.Button type="submit">Sign up</S.Button>
        </S.Form>

        <S.LoginRef>
          Already have an Account? <Link to="/login">Sign In</Link>
        </S.LoginRef>
      </S.RegisterWrapper>
      <S.Mess>*adaptive and responsive layout</S.Mess>
    </S.Container>
  );
}
