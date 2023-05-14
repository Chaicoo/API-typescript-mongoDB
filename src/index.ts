import express from "express";
export * from "colors";
import { config } from "dotenv";
import { GetUserController } from "./controllers/getUsers/getUsers";
import { MongoGetUsersRepository } from "./repositories/getUsers/mongoGetUsers";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/createUser/mongoCreateUser";
import { CreateUserController } from "./controllers/createUser/createuser";
import { MongoUpdateUserRepository } from "./repositories/updateUser/mongoUpdateUser";
import { UpdateUserController } from "./controllers/updateUser/updateUser";

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

    app.patch("/users/update/:id", async (req, res) => {
        const mongoUpdateUserRepository = new MongoUpdateUserRepository();
        const updateUserController = new UpdateUserController(
            mongoUpdateUserRepository
        );

        const { body, statusCode } = await updateUserController.handle({
            body: req.body,
            params: req.params,
        });

        res.status(statusCode).send(body);
    });

    const port = process.env.PORT || 3000;

    app.listen(port, () =>
        console.log(`🚀 Server running on port ${port}🚪`.blue)
    );
};

main();
