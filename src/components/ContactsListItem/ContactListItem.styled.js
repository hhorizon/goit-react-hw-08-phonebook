import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 0 auto;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;
