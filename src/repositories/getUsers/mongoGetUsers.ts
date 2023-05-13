import { IGetUsersRepository } from "../../controllers/getUsers/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [
            {
                firstName: "Francisco",
                lastName: "Lima",
                email: "email@email.com",
                password: "123456",
            },
        ];
    }
}
