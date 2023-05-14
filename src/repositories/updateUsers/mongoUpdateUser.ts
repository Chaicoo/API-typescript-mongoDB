import { ObjectId } from "mongodb";
import {
    IUpdateUserrepository,
    UpdateUserParams,
} from "../../controllers/updateUser/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoUpdateUserRepository implements IUpdateUserrepository {
    async updateUser(id: string, params: UpdateUserParams): Promise<User> {
        await MongoClient.db.collection("users").updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    ...params,
                },
            }
        );

        const user = await MongoClient.db
            .collection<Omit<User, "id">>("users")
            .findOne({ _id: new ObjectId(id) });

        if (!user) {
            throw new Error("User not updated");
        }

        const { _id, ...rest } = user;

        return {
            id: _id.toHexString(),
            ...rest,
        };
    }
}
