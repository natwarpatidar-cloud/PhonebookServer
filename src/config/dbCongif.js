import mongoose from 'mongoose';
import { MONGO_DB_URL } from './serverConfig.js';

export default async function connectDB() {
    try {
        await mongoose.connect(MONGO_DB_URL);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Error in connecting to the db");
    }
}