import Contact from '../models/contact.js';

export const createContact = async (data) => {
    try {
        const contact = await Contact.create(data);
        return contact;
    } catch (error) {
        console.log("Error in create contact repo: ", error);
        throw error;
    }
}

export const updateContact = async (id, data) => {
    try {
        const contact = await Contact.findByIdAndUpdate(id, data, { new: true });
        return contact;
    } catch (error) {
        console.log("Error in updateContact repo: ", error);
        throw error;
    }
}

export const deleteContact = async (id) => {
    try {
        await Contact.findByIdAndDelete(id);
    } catch (error) {
        console.log("Error in deleteContact repo: ", error);
        throw error;
    }
}

export const getContactById = async (id) => {
    try {
        const contact = await Contact.findById(id);
        return contact;
    } catch (error) {
        console.log("Error in getContactById repo: ", error);
        throw error;
    }
}