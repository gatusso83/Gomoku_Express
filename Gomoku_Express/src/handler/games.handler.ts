import express, { Request, Response } from "express"

import validateSchema from '../middleware/validateSchema'

import { getGameByIdSchema } from "../schema/games.schema";

const gamesHandler = express.Router();

const GAMES = [
    {
        "gameId": "1",
        "name": "Game 1",
        "date": "13/07/2022",
        "result": "Winner: Black"
    },
    {
        "gameId": "2",
        "name": "Game 2",
        "date": "13/07/2022",
        "result": "Game is a draw"
    }
]
//Get template
gamesHandler.get("/", (req: Request, res: Response) => {
    res.status(200).json(GAMES)
})

//Get particular game THIS NEEDS CORRECT ROUTE
gamesHandler.get("/:games/gamelog", (req: Request, res: Response) => {
    const result = GAMES.findIndex((g) => (g.gameId.toString() === req.params.gameId))
    if (result) {
        return res.status(200).json(result)
    }
    res.sendStatus(404);
})

//Post particular game
gamesHandler.post("/", (req: Request, res: Response) => {
    // TODO: Save into storage
    const game = req.body;
    res.status(200).json(game)
})

export default gamesHandler