import express from "express";
import { getBunnies } from "../controllers/bunnyController";
const router = express.Router();

router.get("/bunnies", getBunnies);

export default router;
