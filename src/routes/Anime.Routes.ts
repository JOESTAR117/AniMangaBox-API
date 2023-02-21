import { Router } from "express";
import { CreateAnimeControllers } from "../modules/Anime/CreateAnime/CreateAnimeControllers";
import { DeleteAnimeController } from "../modules/Anime/DeleteAnime/DeleteAnimeControllers";
import { FindAllAnimeController } from "../modules/Anime/FindAllAnime/FindAllAnimeControllers";
import { UpdateAnimeControllers } from "../modules/Anime/updateAnime/UpdateAnimeControllers";

const createAnimeControllers = new CreateAnimeControllers();
const findAllAnimeControllers = new FindAllAnimeController();
const updateAnimeControllers = new UpdateAnimeControllers();
const deleteAnimeControllers = new DeleteAnimeController();

const anime = Router();

anime.post("/anime", createAnimeControllers.handle);
anime.get("/anime", findAllAnimeControllers.handle);
anime.patch("/anime/:id", updateAnimeControllers.handle);
anime.delete("/anime/:id", deleteAnimeControllers.handle);

export { anime };
