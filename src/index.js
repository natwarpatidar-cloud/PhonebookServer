import express, { json, urlencoded } from 'express';
import { MONGODB_URI, PORT } from './config/serverConfig.js';
import connectDB from './config/dbCongif.js'
import apiRouter from './routes/api.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors())
app.use(urlencoded());
app.use(json());

app.get('/ping', (r, res) => {
    return res.json({
        mesaage: "pong"
    });
});

app.use('/api', apiRouter)

app.listen(PORT, async() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Error in connecting to the db", error);
    }
});