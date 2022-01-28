import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ExitBtn = styled.button`
  position: fixed;
  top: -70px;
  left: 10px;
  border: none;
  background-color: transparent;
  outline: none;

  &:hover svg,
  &:focus svg {
    color: var(--red-main-color);
    transform: scale(1.5);
  }

  & svg {
    height: 35px;
    width: 35px;
    color: var(--semi-white-color);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 73vw;
  padding: 20px;
  padding-right: 35px;
  background-image: var(--red-gradient);
  border-radius: 30px;

  & img {
    border-radius: 50%;
  }

  @media screen and (min-width: 480px) {
    width: 400px;
    margin: 0 auto;
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: var(--semi-white-color);
  width: 100%;
  margin-bottom: 25px;

  & p {
    margin-left: 15px;
  }
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 15px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  color: var(--semi-white-color);
  background-color: transparent;
  border: 1px solid;
  border-radius: 50px;
  outline: none;
`;

const Button = styled.button`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50%);
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

export { Backdrop, ExitBtn, Form, Label, Input, Button };
