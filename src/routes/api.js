import express from 'express';
import userRouter from './userRoutes.js';
import contactRouter from './contactRoutes.js';

const apiRouter = express.Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/contacts', contactRouter);

export default apiRouter;