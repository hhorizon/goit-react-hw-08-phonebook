import { useSelector } from 'react-redux';

import ContactsListItem from 'components/ContactsListItem';
import { contactsSelectors } from 'redux/contacts';
import * as S from './ContactsList.styled';

export default function ContactsList({ openInfoModal }) {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <S.List>
      {contacts &&
        contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            openModal={openInfoModal}
          />
        ))}
    </S.List>
  );
}
