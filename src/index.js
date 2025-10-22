import express, { json, urlencoded } from 'express';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbCongif.js'
import apiRouter from './routes/api.js';
import cors from 'cors';

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
    await connectDB();
});