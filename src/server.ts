import express from "express";
import { anime } from "./routes/Anime.Routes";
import { user } from "./routes/User.Routes";


const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(user)
app.use(anime)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
