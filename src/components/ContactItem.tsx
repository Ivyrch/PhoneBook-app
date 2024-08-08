import React, { useState } from 'react';
import { Contact } from '../types/contact';
import { updateContact, deleteContact } from '../services/contactApi';

interface ContactItemProps {
    contact: Contact;
    onContactUpdated: () => void;
    onContactDeleted: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onContactUpdated, onContactDeleted }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContact, setUpdatedContact] = useState(contact);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedContact({ ...updatedContact, [name]: value });
    };

    const handleUpdate = async () => {
        await updateContact(contact.id, updatedContact);
        setIsEditing(false);
        onContactUpdated();
    };

    const handleDelete = async () => {
        await deleteContact(contact.id);


        onContactDeleted();

    };

    return (
        <li className="contact-item">
            {isEditing ? (
                <div>
                    <input name="firstName" value={updatedContact.firstName} onChange={handleChange} />
                    <input name="lastName" value={updatedContact.lastName} onChange={handleChange} />
                    <input name="phone" value={updatedContact.phone} onChange={handleChange} />
                    <button onClick={handleUpdate}>Update</button>
                </div>
            ) : (
                <div>
                    <p>{contact.firstName} {contact.lastName} - {contact.phone}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
            <button className="delete-button" onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default ContactItem;
