import express from "express";
import { getDoc } from "../controllers/docController";

const router = express.Router();

router.get("/", getDoc);

export default router;
