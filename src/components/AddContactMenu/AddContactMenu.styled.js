import styled from 'styled-components';

export const ExitBtn = styled.button`
  position: absolute;
  top: -70px;
  left: 10px;
  border: none;
  background-color: transparent;
  outline: none;

  @media screen and (min-width: 1200px) {
    top: -10px;
    left: auto;
    right: -80px;
    transform: rotate(90deg);
  }

  &:hover svg,
  &:focus svg {
    color: ${props => props.theme.mainColor};
    transform: scale(1.5);
  }

  & svg {
    height: 35px;
    width: 35px;
    color: var(--semi-white-color);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 73vw;
  padding: 20px;
  padding-right: 35px;
  background-image: ${props => props.theme.mainGradient};
  border-radius: 20px;

  @media screen and (min-width: 480px) {
    width: 400px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    top: 190px;
    left: 100px;
    transform: translate(0, 0);
    background-image: none;
    border-radius: 0;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  & img {
    border-radius: 50%;
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: var(--semi-white-color);
  width: 100%;
  margin-bottom: 25px;

  & p {
    margin-left: 15px;
  }
`;

export const Input = styled.input`
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

export const Button = styled.button`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50%);
  display: inline;
  margin: 0 auto;
  padding: 15px 80px;
  border: none;
  outline: none;
  border-radius: 35px;
  color: var(--white-color);
  background-color: #0ae762;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
