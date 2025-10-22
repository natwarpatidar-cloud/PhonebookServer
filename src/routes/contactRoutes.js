import express from 'express';
import { createContactController, deleteContactController, updateContactController } from '../controllers/contactController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';

const contactRouter = express.Router();

contactRouter.post('/', isAuthenticated, createContactController);
contactRouter.put('/:contactId', isAuthenticated, updateContactController);
contactRouter.delete('/:contactId', isAuthenticated, deleteContactController);

export default contactRouter;