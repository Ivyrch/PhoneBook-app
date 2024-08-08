import axios from 'axios';
import { Contact, NewContact } from '../types/contact';

const API_URL = 'http://localhost:8080/api/contacts';


export const getContacts = async () => {
    const response = await axios.get<Contact[]>(API_URL)
    return response.data
}

export const createContact = async (newContact: NewContact) => {
    const response = await axios.post<Contact>(API_URL, newContact)
    return response.data

}

export const updateContact = async (id: number, updateContact: Partial<Contact>) => {
    const response = await axios.put<Contact>(`${API_URL}/${id}`, updateContact)
    return response.data
}


export const deleteContact = async (id: number) => {
    const response = await axios.delete<{ message: string }>(`${API_URL}/${id}`);
    return response.data;
}
