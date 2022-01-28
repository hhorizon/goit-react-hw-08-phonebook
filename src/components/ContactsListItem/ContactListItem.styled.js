import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Image = styled.img`
  border-radius: 50%;
`;

const Name = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

export { Item, Image, Name };
