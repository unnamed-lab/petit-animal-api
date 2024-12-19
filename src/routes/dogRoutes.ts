import express from "express";
import { getDogs } from "../controllers/dogController";
const router = express.Router();

router.get("/dogs", getDogs);

export default router;
