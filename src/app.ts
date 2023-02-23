import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { swagger } from "./routes/swagger.Routes";
import { anime } from "./routes/Anime.Routes";
import { user } from "./routes/User.Routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(user);
app.use(anime);
app.use(swagger);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(400).json({
    status: "Error",
    message: error.message,
  });
});

export { app };
