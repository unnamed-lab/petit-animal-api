import { Request, Response } from "express";
import BunnyModel from "../models/bunny";

export const getBunnies = (req: Request, res: Response): void => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;

  const result = BunnyModel.getAll(page, limit);

  res.json(result);
};
