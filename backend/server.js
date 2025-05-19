import express from "express";
import dotenv from "dotenv";

import { users } from "./src/routes/userRoutes.js";
import { posts } from "./src/routes/postRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api",users);
app.use("/api", posts);

app.get("/", (req, res) => {
  res.send("Le serveur fonctionne correctement !");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
