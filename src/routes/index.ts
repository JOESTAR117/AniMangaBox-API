import { Router } from "express";
import { anime } from "./Anime.Routes";
import { recovery } from "./RecoveryPassword.Routes";
import { swagger } from "./swagger.Routes";
import { user } from "./User.Routes";

const routes = Router();

routes.use("/user", user);
routes.use('/recovery',recovery)
routes.use("/anime", anime);
routes.use("/doc",swagger)
export { routes };
