import styled from 'styled-components';

const StyledFilter = styled.div`
  position: relative;
  padding: 15px 15px 20px;
  padding-right: 50px;

  & label {
    position: relative;

    & svg {
      position: absolute;
      top: 2px;
      left: 10px;
      height: 20px;
      width: 20px;
      color: var(--semi-white-color);
    }
  }
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  padding-left: 35px;
  font-size: 16px;
  font-weight: 400;
  color: var(--semi-white-color);
  background-color: transparent;
  border: 1px solid;
  border-radius: 50px;
  outline: none;

  &::placeholder {
    color: var(--semi-white-color);
  }
`;

export { StyledFilter, Input };
