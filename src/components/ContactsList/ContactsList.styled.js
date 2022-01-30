import styled from 'styled-components';

export const List = styled.ul`
  padding: 25px 0;
  background-color: #fff;
  overflow-y: scroll;
  height: 100%;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 85%;
    border-bottom-right-radius: 20px;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    width: 3px;
    background-color: ${props => props.theme.mainColor};
    border-radius: 10px;
  }
`;
