import express from "express";
import { port } from "./config/env.js";

const app = express();

app.use(express.json());

//routes

//error handling

//app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
