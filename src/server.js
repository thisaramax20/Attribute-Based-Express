import express from "express";
import { port } from "./config/env.js";
import projectRoutes from "./routes/projectRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

//routes
app.use("/api/project", projectRoutes);

//error handling
app.use(errorHandler);

//app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
