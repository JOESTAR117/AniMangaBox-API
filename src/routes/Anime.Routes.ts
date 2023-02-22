import { Router } from "express";
import { CreateAnimeControllers } from "../modules/Anime/CreateAnime/CreateAnimeControllers";
import { DeleteAnimeController } from "../modules/Anime/DeleteAnime/DeleteAnimeControllers";
import { FindAllAnimeController } from "../modules/Anime/FindAllAnime/FindAllAnimeControllers";
import { UpdateAnimeControllers } from "../modules/Anime/updateAnime/UpdateAnimeControllers";
import { CreateAnimeRentControllers } from "../modules/Anime_Rent/CreateAnimeRent/CreateAnimeRentControllers";

const createAnimeControllers = new CreateAnimeControllers();
const findAllAnimeControllers = new FindAllAnimeController();
const updateAnimeControllers = new UpdateAnimeControllers();
const deleteAnimeControllers = new DeleteAnimeController();

const createAnimeRentControllers = new CreateAnimeRentControllers();

const anime = Router();

anime.post("/anime", createAnimeControllers.handle);
anime.get("/anime", findAllAnimeControllers.handle);
anime.patch("/anime/:id", updateAnimeControllers.handle);
anime.delete("/anime/:id", deleteAnimeControllers.handle);

anime.post("/anime/rent", createAnimeRentControllers.handle);

export { anime };
