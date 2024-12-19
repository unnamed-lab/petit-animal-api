import { Request, Response } from "express";
import CatModel from "../models/cat";

export const getCats = (req: Request, res: Response): void => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;

  const result = CatModel.getAll(page, limit);

  res.json(result);
};
