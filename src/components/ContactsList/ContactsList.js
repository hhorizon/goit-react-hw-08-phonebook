import { useSelector, useDispatch } from 'react-redux';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  console.log(contacts);

  return (
    <>
      {contacts &&
        contacts.map(contact => (
          <div key={contact.id}>
            <p>{contact.name}</p>
            <button
              onClick={() =>
                dispatch(contactsOperations.deleteContact(contact.id))
              }
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
}
