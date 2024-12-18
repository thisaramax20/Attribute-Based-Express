import express from "express";
import { verifyToken } from "../middleware/authentication.js";
import {
  updateProject,
  viewProject,
} from "../controllers/projectController.js";

const router = express.Router();

//view project
router.get("/:id", verifyToken, viewProject);

//update project
router.put("/:id", verifyToken, updateProject);

export default router;
