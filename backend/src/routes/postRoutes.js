import express from "express";
import PostController from "../controllers/postControllers.js";

const router = express.Router();
const postController = new PostController();

// Routes pour les posts
router.get("/posts", postController.index);
router.get("/posts/:id", postController.show);
router.post("/posts", postController.create);
router.put("/posts/update/:id", postController.update);
router.delete("/posts/delete/:id", postController.delete);

export { router as posts };
