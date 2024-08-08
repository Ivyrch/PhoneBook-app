import React from 'react';
import { Contact } from '../types/contact';
import ContactItem from './ContactItem';


interface ContactListProps {
    contacts: Contact[];
    onContactUpdated: () => void;
    onContactDeleted: () => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onContactUpdated, onContactDeleted }) => {
    return (
        <ul className="contact-list">
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onContactUpdated={onContactUpdated}
                    onContactDeleted={onContactDeleted}
                />
            ))}
        </ul>
    );
};

export default ContactList;
