import styled from 'styled-components';

const List = styled.ul`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 35px;
  }
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

const DeleteBtn = styled.button`
  position: fixed;
  top: 5px;
  right: 10px;
  padding: 5px;
  border: none;
  color: var(--semi-white-color);
  background-color: transparent;

  & svg {
    height: 30px;
    width: 30px;
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
    margin-bottom: 20px;
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
  padding: 5px;
  border: none;
  border-radius: 20px;
  color: var(--semi-white-color);
  background-image: var(--red-gradient);

  & svg {
    height: 40px;
    width: 40px;
  }
`;

export { List, Item, ExitBtn, DeleteBtn, Form, Label, Input, Button };
