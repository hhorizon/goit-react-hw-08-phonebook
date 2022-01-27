import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IoChevronBackOutline } from 'react-icons/io5';
import { authOperations } from 'redux/auth';
import {
  LoginWrapper,
  Tittle,
  Form,
  Label,
  Input,
  Button,
  RegisterRef,
} from './LoginPage.styled';

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
    <LoginWrapper>
      <Tittle>Sign in</Tittle>

      <Link to="/">
        <IoChevronBackOutline />
      </Link>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          {' '}
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          {' '}
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <p>Forgot Password?</p>

        <Button type="submit">Sign in</Button>
      </Form>

      <RegisterRef>
        Don't have an Account? <Link to="/register">Sign Up</Link>
      </RegisterRef>
    </LoginWrapper>
  );
}
