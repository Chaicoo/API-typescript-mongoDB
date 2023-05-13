import express from "express";
export * from "colors";

import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 Server running on port ${port}`.blue))

app.get("/", (req, res) => {
    res.send("Hello World!");
});
