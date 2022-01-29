import styled from 'styled-components';
import fone768 from 'images/fone-768.jpg';

const Container = styled.div`
  padding: 0 20px;
  background-image: url(${fone768});
  background-size: cover;
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
      color: ${props => props.theme.mainColor};
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
    color: ${props => props.theme.mainColor};
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
  padding: 15px 0;
  width: 250px;
  border: none;
  border-radius: 35px;
  color: var(--white-color);
  background-image: ${props => props.theme.mainGradient};
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

const LoginRef = styled.p`
  /* margin-top: 50px; */
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
  color: var(--semi-white-color);

  & a {
    color: ${props => props.theme.mainColor};
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
