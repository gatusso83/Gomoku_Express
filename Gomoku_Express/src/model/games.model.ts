import mongoose, { Document } from "mongoose";
import { string } from "zod";

export interface GamesDocument extends Document {
    name: string,
    date: Date,
    result: string
}

const gamesSchema = new mongoose.Schema({
    name: String,
    date: Date,
    result: String
})

export default mongoose.model<GamesDocument>("Games", gamesSchema)
