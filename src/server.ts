import express from "express";
import cors from "cors";
import { swagger } from "./routes/swagger.Routes";
import { anime } from "./routes/Anime.Routes";
import { user } from "./routes/User.Routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(user);
app.use(anime);
app.use(swagger)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
