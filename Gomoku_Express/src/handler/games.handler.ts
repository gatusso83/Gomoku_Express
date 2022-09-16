import express, { Request, Response } from "express"
import { send } from "process";

import validateSchema from '../middleware/validateSchema'

import { getGameByIdSchema } from "../schema/games.schema";

import { getAllGames, getGameById } from "../service/game.service";

const gamesHandler = express.Router();

//Get all games
gamesHandler.get("/", async (req: Request, res: Response) => {
    try {
        const result = await getAllGames();
        return res.status(200).send(result.map(m => ({
            _id: m._id,
            name: m.name,
            date: m.date,
            result: m.result
        })));
    } catch (err) {
        return res.status(500).send(err)
    }
})

//Get particular game
gamesHandler.get("/:gameId", validateSchema(getGameByIdSchema), async (req: Request, res: Response) => {
    const game = await getGameById(req.params.gameId)
    console.log(game)
    if (!game) return res.sendStatus(404)
    return res.status(200).json({ ...game })
})

//Post particular game
gamesHandler.post("/", (req: Request, res: Response) => {
    // TODO: Save into storage
    const game = req.body;
    res.status(200).json(game)
})

export default gamesHandler