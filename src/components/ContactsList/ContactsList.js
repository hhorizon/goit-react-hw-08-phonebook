import { useState } from 'react';
import { useSelector } from 'react-redux';

import { contactsSelectors } from 'redux/contacts';
import ContactsListItem from 'components/ContactsListItem';
import Modal from 'components/Modal';
import InfoContactMenu from 'components/InfoContactMenu';
import { List } from './ContactsList.styled';

export default function ContactsList() {
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const openInfoModal = selectedContact => {
    setSelectedContact(selectedContact);
  };

  const closeInfoModal = () => {
    setSelectedContact(null);
  };

  return (
    <List>
      {contacts &&
        contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            openModal={openInfoModal}
          />
        ))}

      {selectedContact && (
        <Modal closeModal={closeInfoModal}>
          <InfoContactMenu
            closeModal={closeInfoModal}
            contact={selectedContact}
          />
        </Modal>
      )}
    </List>
  );
}
