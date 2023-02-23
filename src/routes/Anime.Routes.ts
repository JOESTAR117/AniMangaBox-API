import { Router } from "express";
import { CreateAnimeControllers } from "../modules/Anime/CreateAnime/CreateAnimeControllers";
import { DeleteAnimeController } from "../modules/Anime/DeleteAnime/DeleteAnimeControllers";
import { FindAllAnimeController } from "../modules/Anime/FindAllAnime/FindAllAnimeControllers";
import { UpdateAnimeControllers } from "../modules/Anime/updateAnime/UpdateAnimeControllers";
import { CreateAnimeRentControllers } from "../modules/Anime_Rent/CreateAnimeRent/CreateAnimeRentControllers";
import { DeleteAnimeRentControllers } from "../modules/Anime_Rent/DeleteAnimeRent/DeleteAnimeRentControllers";

const createAnimeControllers = new CreateAnimeControllers();
const findAllAnimeControllers = new FindAllAnimeController();
const updateAnimeControllers = new UpdateAnimeControllers();
const deleteAnimeControllers = new DeleteAnimeController();

const createAnimeRentControllers = new CreateAnimeRentControllers();
const deleteAnimeRentControllers = new DeleteAnimeRentControllers();

const anime = Router();

anime.post("/", createAnimeControllers.handle);
anime.get("/", findAllAnimeControllers.handle);
anime.patch("/:id", updateAnimeControllers.handle);
anime.delete("/:id", deleteAnimeControllers.handle);

anime.post("/rent", createAnimeRentControllers.handle);
anime.delete("/rent/:animeId/:userId", deleteAnimeRentControllers.handle);

export { anime };
