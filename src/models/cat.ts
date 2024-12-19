import { AnimalResponse } from "../types";
import { cats } from "../utils";

export default class CatModel {
  static getAll(page: number = 1, limit: number = 10): AnimalResponse {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      data: cats.slice(start, end),
      nextPage: end < cats.length ? page + 1 : undefined,
    };
  }
}
