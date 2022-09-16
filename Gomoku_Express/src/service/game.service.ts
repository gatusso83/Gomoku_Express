import GamesModel from "../model/games.model";

export async function getAllGames() {
    return await GamesModel.find().lean();
}

export async function getGameById(id: string) {
    return await GamesModel.findById(id).lean();
}