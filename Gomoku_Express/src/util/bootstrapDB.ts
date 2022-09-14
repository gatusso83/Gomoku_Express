import 'dotenv/config';
import connect from './connectDB';

import UserModel from "../model/user.model";
import users from "../data/user.json";

import GamesModel from '../model/games.model';
import games from "../data/games.json"

const run = async () => {
    try {
        await connect();

        await UserModel.deleteMany();
        await UserModel.create(users);

        await GamesModel.deleteMany();
        await GamesModel.insertMany(games);

        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

run();