import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Chicken } from "../chickenSummary";

let chickens: Chicken[] | undefined = undefined;

const getChickensLocal = () => {
  if (chickens === undefined) {
    chickens = JSON.parse(
      readFileSync(resolve(__dirname, "./chickens.json"), "utf8")
    ) as Chicken[];
  }

  return chickens;
};

export const getChickens = async (): Promise<Chicken[]> => {
  return getChickensLocal();
};

export const putChicken = async (newChicken: Chicken) => {
  chickens = getChickensLocal().map((chicken) =>
    chicken.id === newChicken.id ? newChicken : chicken
  );
};
