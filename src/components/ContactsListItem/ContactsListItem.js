import avatar from '../../images/contact-avatar.png';
import * as S from './ContactListItem.styled';

export default function ContactsListItem({ contact, openModal }) {
  return (
    <S.Item key={contact.id} onClick={() => openModal(contact)}>
      <S.Image src={avatar} alt="contact-avatar" height={40} width={40} />
      <S.Name>{contact.name}</S.Name>
    </S.Item>
  );
}
