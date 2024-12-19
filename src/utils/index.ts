import AnimalJSON from "../../static-data/animals.json";
import { Animal, AnimalStore } from "../types/index";

const animals: Animal[] = AnimalJSON as Animal[];

export const dogs: AnimalStore[] = animals
  .filter((el): el is Animal => el.type === "dog")
  .map((el, i) => ({
    id: String(i + 1),
    breed: el.breed,
    type: el.type,
    image: el.image,
  }));

export const cats: AnimalStore[] = animals
  .filter((el): el is Animal => el.type === "cat")
  .map((el, i) => ({
    id: String(i + 1),
    breed: el.breed,
    type: el.type,
    image: el.image,
  }));

export const bunnies: AnimalStore[] = animals
  .filter((el): el is Animal => el.type === "bunny")
  .map((el, i) => ({
    id: String(i + 1),
    breed: el.breed,
    type: el.type,
    image: el.image,
  }));
