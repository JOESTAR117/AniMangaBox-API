import express from "express";
import { user } from "./routes/User.Routes";


const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(user)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
