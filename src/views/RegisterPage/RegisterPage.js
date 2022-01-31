import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { IoChevronBackOutline } from 'react-icons/io5';

import { authOperations } from 'redux/auth';
import * as S from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = ({ target: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.name === '') {
      return toast.error('Enter name.');
    } else if (user.email === '') {
      return toast.error('Enter email.');
    } else if (user.password === '') {
      return toast.error('Enter password.');
    }

    dispatch(authOperations.register(user));
    setUser({ name: '', email: '', password: '' });
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
              value={user.name}
              onChange={handleChange}
            />
          </S.Label>

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
