import express from "express";
import {
 createUser,deleteUser,getAllUsers,updateUser,logoutUser,
 loginUser,} from "../controllers/userControllers.js";


const router = express.Router();

router.get("/users",getAllUsers);
router.post("/register", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.post("/logout", logoutUser);
router.post("/login",loginUser)
export { router as users };
