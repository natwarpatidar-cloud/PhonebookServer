import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_DB_URL = process.env.DB_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRY = process.env.JWT_EXPIRY || '1d';