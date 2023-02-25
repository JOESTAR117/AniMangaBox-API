import { Router } from "express";
import { Auth } from "../middlewares/Auth.Middlewares";
import { CreateAnimeControllers } from "../modules/Anime/CreateAnime/CreateAnimeControllers";
import { FindAllAnimeController } from "../modules/Anime/FindAllAnime/FindAllAnimeControllers";
import { UpdateAnimeControllers } from "../modules/Anime/updateAnime/UpdateAnimeControllers";
import { CreateAnimeRentControllers } from "../modules/Anime_Rent/CreateAnimeRent/CreateAnimeRentControllers";
import { DeleteAnimeRentControllers } from "../modules/Anime_Rent/DeleteAnimeRent/DeleteAnimeRentControllers";

const createAnimeControllers = new CreateAnimeControllers();
const findAllAnimeControllers = new FindAllAnimeController();
const updateAnimeControllers = new UpdateAnimeControllers();

const createAnimeRentControllers = new CreateAnimeRentControllers();
const deleteAnimeRentControllers = new DeleteAnimeRentControllers();

const anime = Router();

anime.post("/", createAnimeControllers.handle);
anime.get("/", findAllAnimeControllers.handle);
anime.patch("/:id", updateAnimeControllers.handle);

anime.post("/rent", Auth,createAnimeRentControllers.handle);
anime.delete("/rent/:animeId/:userId",Auth, deleteAnimeRentControllers.handle);

export { anime };
