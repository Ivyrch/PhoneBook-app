import React, { useState } from 'react';
import { NewContact } from '../types/contact';
import { createContact } from '../services/contactApi';


interface ContactFormProps {
    onContactCreated: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onContactCreated }) => {
    const [contact, setContact] = useState<NewContact>({ firstName: '', lastName: '', phone: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createContact(contact);
        setContact({ firstName: '', lastName: '', phone: '' });
        onContactCreated();
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input name="firstName" value={contact.firstName} onChange={handleChange} placeholder="First Name" required />
            <input name="lastName" value={contact.lastName} onChange={handleChange} placeholder="Last Name" required />
            <input name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" required />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;
