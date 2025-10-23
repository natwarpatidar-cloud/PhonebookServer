import { createContactService, updateContactService, deleteContactService, getAllContactService } from '../services/contactService.js'

export const createContactController = async (req, res) => {
    try {
        if(!req.file) {
            throw new Error("Avatar is required");
        }
        req.body.avatar = req.file.path;
        req.body.public_key = req.file.filename;
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
        if (req.file || req.file.filename) {
            console.log("deleting image");
            await deleteImageCloudinary(req.file.filename);
            return;
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
        return res.status(200).json({
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
        await deleteContactService(req.params.contactId, req.user._id);
        return res.status(200).json({
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

export const getAllContactsController = async (req, res) => {
    try {
        const response = await getAllContactService(req.user.id, req.query.page, req.query.limit);
        return res.status(200).json({
            success: true,
            data: response,
            message: "All contacts fetched successfully"
        });
    } catch (error) {
        console.log("Error at getAllContactsController: ", error);
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