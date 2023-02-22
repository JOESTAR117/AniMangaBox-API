import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { swagger } from "./routes/swagger.Routes";
import { anime } from "./routes/Anime.Routes";
import { user } from "./routes/User.Routes";
import { auth } from "./routes/Auth.Routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(user);
app.use(auth)
app.use(anime);
app.use(swagger);

export { app };
