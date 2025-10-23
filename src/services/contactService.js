import { createContact, deleteContact, getAllContacts, getContactById, updateContact } from '../repositories/contactRepository.js';

export const createContactService = async (data, userId) => {
    try {
        if(!data) {
            throw new Error("Contact details are missing");
        }
        
        const response = await createContact({...data, user: userId });
        return response;
    } catch (error) {
        console.log("Error in createContactService: ", error);
        throw error;
    }
}

export const updateContactService = async (id, data, userId) => {
    try {
        if(!data) {
            throw new Error("Contact details are missing");
        }
        if(!id) {
            throw new Error("Contact id is required");
        }
        const contact = await getContactById(id);
        if(!contact) {
            throw new Error("Contact not found");
        }
        if(contact.user.toString() !== userId) {
            throw new Error("You're not autorized to update this contact");
        }
        const response = await updateContact(id, data);
        return response;
    } catch (error) {
        console.log("Error in updateContactService: ", error);
        throw error;
    }
}

export const deleteContactService = async (id, userId) => {
    try {
        if(!id) {
            throw new Error("Contact id is required");
        }
        const contact = await getContactById(id);
        if(!contact) {
            throw new Error("Contact not found");
        }
        if(contact.user.toString() !== userId.toString()) {
            throw new Error("You're not autorized to delete this contact");
        }
        await deleteContact(id);
    } catch (error) {
        console.log("Error in deleteContactService: ", error);
        throw error;
    }
}

export const getAllContactService = async(userId, page, limit) => {
    try {
        if(!userId) throw new Error("User id is required");
        const contacts = await getAllContacts(userId, page, limit);
        return {
            contacts: contacts,
            page,
            limit
        };
    } catch (error) {
        console.log("Error in getAllContacts service: ", error);
        throw error;
    }
}