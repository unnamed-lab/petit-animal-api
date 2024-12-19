export type Animal = {
  breed: string;
  image: string;
  type: "bunny" | "dog" | "cat";
};

export type AnimalStore = Animal & { id: string };

export interface AnimalResponse {
  data: Animal[];
  nextPage: number | undefined;
}
