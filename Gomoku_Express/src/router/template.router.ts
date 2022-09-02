import express, { Request, Response } from "express"

const templateRouter = express.Router();

//Get template
templateRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json([
        {
            "_id": 1,
            "name": "Game 1",
            "year": 2022
        },
        {
            "_id": 2,
            "name": "Game 2",
            "year": 2022
        }
    ])
})

//Get particular game
templateRouter.get("/:games/gamelog", (req: Request, res: Response) => {
    res.status(200).json([
        {
            "_id": 1,
            "name": "Game 1",
            "winner": "Player 1"
        }
    ])
})

export default templateRouter