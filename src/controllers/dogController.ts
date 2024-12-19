import { Request, Response } from "express";
import DogModel from "../models/dog";

export const getDogs = (req: Request, res: Response): void => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;

  const result = DogModel.getAll(page, limit);

  res.json(result);
};
