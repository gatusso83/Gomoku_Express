import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import gamesHandler from './handler/games.handler';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/games', gamesHandler)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})