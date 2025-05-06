import express from "express";
import dotenv from "dotenv";

//import { users } from "./src/routes/userRoute.js";

dotenv.config();
const app = express();
app.use(express.json());

//app.use(users);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
