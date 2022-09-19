import express, { Request, Response } from "express"
import { send } from "process";

import validateSchema from '../middleware/validateSchema'

import { getGameLogSchema, createGameLogSchema } from "../schema/game-log.schema";

import { createGame, getAllGames, getGameLogById } from "../service/game-log.service";

const gameLogHandler = express.Router();

gameLogHandler.get("/", async (req: Request, res: Response) => {
    try {
        const result = await getAllGames();
        return res.status(200).send(result.map(m => ({
            _id: m._id,
            name: m.name,
            date: m.date,
            black: m.black,
            white: m.white,
            result: m.result
        })));
    } catch (err) {
        return res.status(500).send(err)
    }
})

//Get game by ID template
gameLogHandler.get("/:gameId", validateSchema(getGameLogSchema), async (req: Request, res: Response) => {
    const game = await getGameLogById(req.params.gameId)
    console.log(game)
    if (!game) return res.sendStatus(404)
    return res.status(200).json({ ...game })
})

//Post particular game
gameLogHandler.post("/", validateSchema(createGameLogSchema), async (req: Request, res: Response) => {
    // TODO: Save into storage
    const game = req.body;
    const newGame = await createGame({ ...game })
    //wss.clients.forEach(client)
    res.status(200).json(game)
})

export default gameLogHandler