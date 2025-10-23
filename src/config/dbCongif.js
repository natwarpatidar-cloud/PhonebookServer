import mongoose from 'mongoose';
import { MONGODB_URI } from './serverConfig.js';

export default async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Error in connecting to the db");
    }
}