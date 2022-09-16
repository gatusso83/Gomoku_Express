import express, { Request, Response } from "express"

import validateSchema from '../middleware/validateSchema'
import { getGameByIdSchema } from "../schema/games.schema";

import { getGameById } from "../service/game.service";
const gameLogHandler = express.Router();

//Get template
gameLogHandler.get("/", (req: Request, res: Response) => {
    res.status(200).json([
        {
            name: "Game 1",
            date: "13/07/2022",
            result: "Winner: Black"
        },
        {
            name: "Game 2",
            date: "13/07/2022",
            result: "Game is a draw"
        }
    ])
})

gameLogHandler.get("/:gameId", validateSchema(getGameByIdSchema), async (req: Request, res: Response) => {
    const game = await getGameById(req.params.gameId)
    console.log(game)
    if (!game) return res.sendStatus(404)
    return res.status(200).json({ ...game })
})

//Get particular game
gameLogHandler.get("/:id", (req: Request, res: Response) => {
    res.status(200).json([
        { // this part is wrong it should be prinitng out numbers over the stones. 
            "_id": 1,
            "name": "Game 1",
            "winner": "Player 1"
        }
    ])
})

//Post particular game
gameLogHandler.post("/", (req: Request, res: Response) => {
    // TODO: Save into storage
    const game = req.body;
    res.status(200).json(game)
})

export default gameLogHandler