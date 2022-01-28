import avatar from '../../images/contact-avatar.png';
import { Item, Image, Name } from './ContactListItem.styled';

export default function ContactsListItem({ contact, openModal }) {
  return (
    <Item key={contact.id} onClick={() => openModal(contact)}>
      <Image src={avatar} alt="contact-avatar" height={40} width={40} />
      <Name>{contact.name}</Name>
    </Item>
  );
}
