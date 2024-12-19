import { AnimalResponse } from "../types";
import { dogs } from "../utils";

export default class DogModel {
  static getAll(page: number = 1, limit: number = 10): AnimalResponse {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      data: dogs.slice(start, end),
      nextPage: end < dogs.length ? page + 1 : undefined,
    };
  }
}
