import { MongoClient as Client, Db } from "mongodb";

export const MongoClient = {
    client: undefined as unknown as Client,
    db: undefined as unknown as Db,

    async connect(): Promise<void> {
        const url = process.env.MONGODB_URL || "";
        const userName = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;

        const client = new Client(url, {
            auth: { username: userName, password: password },
        });

        const db = client.db("usersAPI");

        this.client = client;
        this.db = db;

        console.log("✅ Connected to MongoDB".blue);
    },
};
