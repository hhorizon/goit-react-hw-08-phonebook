import styled from 'styled-components';
import redFone768 from 'images/red-fone/red-fone-768.jpg';

const Container = styled.div`
  padding: 0 20px;
  background: url(${redFone768});
`;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }
`;

const TittleWrapper = styled.div`
  padding-left: 20px;
  margin-top: 150px;

  & > a {
    display: inline-block;
    margin-top: 10px;
    margin-left: -10px;

    & svg {
      color: var(--white-color);
      height: 30px;
      width: 30px;
    }

    &:hover svg {
      color: var(--red-main-color);
    }
  }
`;

const Tittle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white-color);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  padding: 0 40px;

  & span {
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: end;
    font-size: 16px;
    color: var(--semi-white-color);
    cursor: pointer;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: var(--semi-white-color);

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const LabelAgree = styled(Label)`
  font-size: 12px;

  & input {
    margin-right: 5px;
  }

  & span {
    font-size: 12px;
    color: var(--red-main-color);
  }
`;

const Input = styled.input`
  display: block;
  outline: none;
  margin-top: 15px;
  width: 100%;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--semi-white-color);
`;

const Button = styled.button`
  display: inline;
  margin: 0 auto;
  padding: 15px 80px;
  border: none;
  border-radius: 35px;
  color: var(--white-color);
  background-image: var(--red-gradient);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

const LoginRef = styled.p`
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
  color: var(--semi-white-color);

  & a {
    color: var(--red-main-color);
  }
`;
export {
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
};