import express from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";

const router = express.Router();

// Routes pour les posts
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", createPost);
router.put("/posts/update/:id", updatePost);
router.delete("/posts/delete/:id", deletePost);

export { router as posts };
