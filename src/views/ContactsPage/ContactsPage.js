import styled from 'styled-components';
import AppBar from 'components/AppBar/AppBar';

export default function ContactsPage() {
  return (
    <Container>
      <ContactsWrapepr>
        <AppBar />
      </ContactsWrapepr>
    </Container>
  );
}

const Container = styled.div``;

const ContactsWrapepr = styled.div`
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 440px;
    margin: 0 auto;
  }
`;
