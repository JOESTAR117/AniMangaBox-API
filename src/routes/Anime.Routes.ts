import { Router } from "express";
import { CreateAnimeControllers } from "../modules/Anime/CreateAnime/CreateAnimeControllers";
import { FindAllAnimeController } from "../modules/Anime/FindAllAnime/FindAllAnimeControllers";
import { UpdateAnimeControllers } from "../modules/Anime/updateAnime/UpdateAnimeControllers";

const createAnimeControllers = new CreateAnimeControllers();
const findAllAnimeControllers = new FindAllAnimeController();
const updateAnimeController = new UpdateAnimeControllers();

const anime = Router();

anime.post("/anime", createAnimeControllers.handle);
anime.get("/anime", findAllAnimeControllers.handle);
anime.patch("/anime/:id", updateAnimeController.handle);

export { anime };
