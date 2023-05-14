import express from "express";
export * from "colors";
import { config } from "dotenv";
import { GetUserController } from "./controllers/getUsers/getUsers";
import { MongoGetUsersRepository } from "./repositories/getUsers/mongoGetUsers";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/createUser/mongoCreateUser";
import { CreateUserController } from "./controllers/createUser/createuser";

const main = async () => {
    config();

    const app = express();

    app.use(express.json());

    await MongoClient.connect();

    app.get("/users", async (req, res) => {
        const mongoGetUsersRepository = new MongoGetUsersRepository();
        const getUsersController = new GetUserController(
            mongoGetUsersRepository
        );

        const { body, statusCode } = await getUsersController.handle();

        res.status(statusCode).send(body);
    });

    app.post("/users/create", async (req, res) => {
        const mongoCreateUserRepository = new MongoCreateUserRepository();
        const createUserController = new CreateUserController(
            mongoCreateUserRepository
        );

        const { body, statusCode } = await createUserController.handle({
            body: req.body,
        });

        res.status(statusCode).send(body);
    });

    const port = process.env.PORT || 3000;

    app.listen(port, () =>
        console.log(`🚀 Server running on port ${port}🚪`.blue)
    );
};

main();
