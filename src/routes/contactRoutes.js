import express from 'express';
import { createContactController, deleteContactController, getAllContactsController, updateContactController } from '../controllers/contactController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
import { uploader } from '../config/cloudinaryConfig.js';

const contactRouter = express.Router();

contactRouter.post('/', isAuthenticated, uploader.single("avatar"), createContactController);
contactRouter.put('/:contactId', isAuthenticated, uploader.single("avatar"), updateContactController);
contactRouter.delete('/:contactId', isAuthenticated, deleteContactController);
contactRouter.get('/', isAuthenticated, getAllContactsController);

export default contactRouter;