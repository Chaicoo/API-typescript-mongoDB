import express from "express";
export * from "colors";
import { config } from "dotenv";
import { GetUserController } from "./controllers/getUsers/getUsers";
import { MongoGetUsersRepository } from "./repositories/getUsers/mongoGetUsers";
import { MongoClient } from "./database/mongo";

const main = async () => {
    config();

    const app = express();

    await MongoClient.connect();

    app.get("/users", async (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();
        const getUsersController = new GetUserController(
            mongoGetUsersRepository
        );

        const { body, statusCode } = await getUsersController.handle();

        res.send(body).status(statusCode);
    });

    const port = process.env.PORT || 3000;

    app.listen(port, () =>
        console.log(`🚀 Server running on port ${port}🚪`.blue)
    );
};

main();
