import { DocumentDefinition } from "mongoose";
import GameLogModel, { GameLogDocument } from "../model/game-log.model";

export async function getAllGames() {
    return await GameLogModel.find().lean();
}

export async function getGameLogById(id: string) {
    return await GameLogModel.findById(id).lean();
}

export async function createGame(
    input: DocumentDefinition<GameLogDocument>
) {
    return GameLogModel.create(input)
}