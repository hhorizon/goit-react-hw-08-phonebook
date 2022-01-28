import styled from 'styled-components';

const Container = styled.div``;

const ThemeWrapper = styled.div`
  background-image: var(--red-gradient);
`;

const ContactsWrapepr = styled.div`
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
`;

const AddBtn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  border: none;
  background-color: transparent;

  & svg {
    color: var(--red-main-color);
    width: 60px;
    height: 60px;
  }
`;

export { Container, ThemeWrapper, ContactsWrapepr, AddBtn };