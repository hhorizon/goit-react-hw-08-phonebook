import styled from 'styled-components';
import fone768 from 'images/fone-768.jpg';
import fone1200 from 'images/fone-1200.jpg';

export const Container = styled.div`
  background-image: url(${fone768});
  background-size: cover;

  @media screen and (min-width: 768px) {
    display: flex;
    background-image: url(${fone1200});
    height: 100vh;
    padding: 0;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 80vh;
    padding: 0;
    border-radius: 20px;
    background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    );
  }

  @media screen and (min-width: 1200px) {
    width: 1100px;
  }
`;

export const TittleWrapper = styled.div`
  padding-left: 20px;
  margin-top: 150px;

  @media screen and (min-width: 768px) {
    padding-left: 60px;
    margin-top: 50px;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 100px;
  }

  & > a {
    display: inline-block;
    margin-top: 10px;
    margin-left: -10px;

    & svg {
      color: var(--white-color);
      height: 30px;
      width: 30px;
    }

    &:hover svg,
    &:focus svg {
      color: ${props => props.theme.mainColor};
    }
  }
`;

export const Tittle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--white-color);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  @media screen and (min-width: 768px) {
    width: 360px;
    margin: 0 auto;
  }

  & p {
    margin-top: 10px;
    margin-bottom: 40px;
    text-align: end;
    font-size: 16px;
    color: var(--semi-white-color);
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${props => props.theme.mainColor};
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: var(--semi-white-color);

  &:first-child {
    margin-bottom: 25px;
  }
`;

export const Input = styled.input`
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

export const Button = styled.button`
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
  cursor: pointer;
`;

export const RegisterRef = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
  color: var(--semi-white-color);

  & a {
    color: ${props => props.theme.mainColor};
  }
`;
