import { object, string, number, TypeOf } from "zod"

const payload = {
    body: object({
        gameId: string({
            required_error: "Game id is required",
        }),
        name: string({
            required_error: "Name of game is required",
        }),
        date: string({
            required_error: "Date of game is required",
        }),
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

export const createGameSchema = object({
    ...payload
});

export const getGameSchema = object({
    ...getParams
})

export const updateGameSchema = object({
    ...payload,
    ...updateDeleteParams
})

export type CreateGameSchema = TypeOf<typeof createGameSchema>
export type ReadGameSchema = TypeOf<typeof getGameSchema>
export type UpdateGameSchema = TypeOf<typeof updateGameSchema>