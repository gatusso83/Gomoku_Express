import mongoose, { Document } from "mongoose";
import { string } from "zod";

export interface GamesDocument extends Document {
    name: string,
    date: string,
    result: string
}

const gamesSchema = new mongoose.Schema({
    name: String,
    date: String,
    result: String
})

export default mongoose.model<GamesDocument>("Gamelogs", gamesSchema)
