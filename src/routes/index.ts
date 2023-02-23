import { Router } from "express";
import { anime } from "./Anime.Routes";
import { user } from "./User.Routes";

const routes = Router();

routes.use("/user", user);
routes.use("/anime", anime);

export { routes };
