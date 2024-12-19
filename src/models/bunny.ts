import { AnimalResponse } from "../types";
import { bunnies } from "../utils";

export default class BunnyModel {
  static getAll(page: number = 1, limit: number = 10): AnimalResponse {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      data: bunnies.slice(start, end),
      nextPage: end < bunnies.length ? page + 1 : undefined,
    };
  }
}
