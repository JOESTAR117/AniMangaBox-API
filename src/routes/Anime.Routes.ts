import { Router } from "express";
import { CreateAnimeControllers } from "../modules/Anime/CreateAnime/CreateAnimeControllers";
import { FindAllAnimeController } from "../modules/Anime/FindAllAnime/FindAllAnimeControllers";

const createAnimeControllers = new CreateAnimeControllers();
const findAllAnimeControllers = new FindAllAnimeController();

const anime = Router();

anime.post("/anime", createAnimeControllers.handle);
anime.get("/anime", findAllAnimeControllers.handle);

export { anime };
