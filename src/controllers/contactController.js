import { createContactService, updateContactService, deleteContactService } from '../services/contactService.js'

export const createContactController = async (req, res) => {
    try {
        const response = await createContactService(req.body, req.user.id);
        return res.status(201).json({
            success: true,
            data: response,
            message: "Contact created successfully"
        });
    } catch (error) {
        console.log("Error at createContactController: ", error);
        if(error.message) {
            return res.status(400).json({
                success: false,
                data: {},
                error: error.message
            });
        }
        return res.status(501).json({
            success: false,
            data: {},
            error: "Internal server error"
        });
    }
}

export const updateContactController = async (req, res) => {
    try {
        const response = await updateContactService(req.params.contactId, req.body, req.user.id);
        return res.status(201).json({
            success: true,
            data: response,
            message: "Contact updated successfully"
        });
    } catch (error) {
        console.log("Error at updateContactController: ", error);
        if(error.message) {
            return res.status(400).json({
                success: false,
                data: {},
                error: error.message
            });
        }
        return res.status(501).json({
            success: false,
            data: {},
            error: "Internal server error"
        });
    }
}

export const deleteContactController = async (req, res) => {
    try {
        await deleteContactService(req.params.contactId, req.user.id);
        return res.status(201).json({
            success: true,
            message: "Contact deleted successfully"
        });
    } catch (error) {
        console.log("Error at deleteContactController: ", error);
        if(error.message) {
            return res.status(400).json({
                success: false,
                data: {},
                error: error.message
            });
        }
        return res.status(501).json({
            success: false,
            data: {},
            error: "Internal server error"
        });
    }
}
