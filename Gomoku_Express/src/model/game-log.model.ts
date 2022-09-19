import mongoose, { Document } from "mongoose";
import { string } from "zod";

export interface GameLogDocument extends Document {
    name: string,
    date: string,
    black: [number],
    white: [number],
    result: string
}

const gameLogSchema = new mongoose.Schema({
    name: String,
    date: String,
    black: [Number],
    white: [Number],
    result: String
})

export default mongoose.model<GameLogDocument>("gamelogs", gameLogSchema)