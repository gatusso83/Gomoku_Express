import express, { Request, Response } from "express"

const gameLogRouter = express.Router();

//Get template
gameLogRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json([
        {
            gameId: "1",
            name: "Game 1",
            date: "13/07/2022",
            result: "Winner: Black"
        },
        {
            gameId: 2,
            name: "Game 2",
            date: "13/07/2022",
            result: "Game is a draw"
        }
    ])
})

//Get particular game
gameLogRouter.get("/:games/gamelog", (req: Request, res: Response) => {
    res.status(200).json([
        { // this part is wrong it should be prinitng out numbers over the stones. 
            "_id": 1,
            "name": "Game 1",
            "winner": "Player 1"
        }
    ])
})

//Post particular game
gameLogRouter.post("/", (req: Request, res: Response) => {
    // TODO: Save into storage
    const game = req.body;
    res.status(200).json(game)
})

export default gameLogRouter