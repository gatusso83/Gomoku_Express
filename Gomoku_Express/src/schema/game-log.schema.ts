import { object, string, number, TypeOf, array } from "zod"

const payload = {
    body: object({
        //      gameId: string({
        //        required_error: "Game id is required",
        //      }),
        name: string({
            required_error: "Name of game is required",
        }),
        date: string({
            required_error: "Date of game is required",
        }),
        black: array(
            number({
                required_error: "Black moves required"
            })
        ),
        white: array(
            number({
                required_error: "White moves required"
            })
        ),
        result: string({
            required_error: "Result of game is required",
        }),
    })
}

const getParams = {
    params: object({
        gameId: string({
            required_error: "Game id is required"
        }),
    }),
}

const updateDeleteParams = {
    params: object({
        gameId: string({
            required_error: "Game id is requried"
        })
    })
}

export const createGameLogSchema = object({
    ...payload
});

export const getGameLogSchema = object({
    ...getParams
})

export const updateGameLogSchema = object({
    ...payload,
    ...updateDeleteParams
})

export type CreateGameSchema = TypeOf<typeof createGameLogSchema>
export type ReadGameSchema = TypeOf<typeof getGameLogSchema>
export type UpdateGameSchema = TypeOf<typeof updateGameLogSchema>