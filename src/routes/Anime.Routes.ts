import { Router } from "express";
import { CreateAnimeControllers } from "../modules/Anime/CreateAnime/CreateAnimeControllers";

const createAnimeControllers = new CreateAnimeControllers()

const anime = Router()

anime.post("/anime",createAnimeControllers.handle)

export {anime}