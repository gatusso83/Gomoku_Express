import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import connectDB from './util/connectDB';
import gamesHandler from './handler/games.handler';

dotenv.config();

//connect to database
connectDB();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/games', gamesHandler)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
});

// only listen to request when DB connection is established
mongoose.connection.once('connected', () => {
    console.log('⚡️[server]: Connected to MongoDB.');
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
})

//app.listen(port, () => {
//    console.log(`[server]: Server is running at http://localhost:${port}`);
//})