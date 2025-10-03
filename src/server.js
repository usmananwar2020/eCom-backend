import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import connectDB from "./startup/db.js";
import loadConfig from "./startup/config.js";
import loadRoutes from "./startup/routes.js";

dotenv.config({ path: "../.env" });

const app = express();
app.use(express.json());
app.use(cors());

loadConfig();
connectDB();
loadRoutes(app);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
