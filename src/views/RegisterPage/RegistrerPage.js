import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IoChevronBackOutline } from 'react-icons/io5';
import { authOperations } from 'redux/auth';
import {
  Container,
  RegisterWrapper,
  TittleWrapper,
  Tittle,
  Form,
  Label,
  LabelAgree,
  Input,
  Button,
  LoginRef,
} from './RegisterPage.styled';

export default function RegistrationPage() {
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
    <Container>
      <RegisterWrapper>
        <TittleWrapper>
          <Tittle>Sign up</Tittle>

          <Link to="/">
            <IoChevronBackOutline />
          </Link>
        </TittleWrapper>

        <Form onSubmit={handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Label>

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

          <LabelAgree>
            <input type="checkbox" required />I Read and agree to{' '}
            <span>terms & Conditions</span>
          </LabelAgree>

          <Button type="submit">Sign up</Button>
        </Form>

        <LoginRef>
          Already have an Account? <Link to="/login">Sign In</Link>
        </LoginRef>
      </RegisterWrapper>
    </Container>
  );
}
