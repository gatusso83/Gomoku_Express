import { object, string, number, TypeOf } from "zod"

const params = {
    params: object({
        gameId: string({
            required_error: "Game id is required",
        })
    })
}

export const getGameByIdSchema = object({
    ...params
})

export type GetGameByIdInput = TypeOf<typeof getGameByIdSchema>
