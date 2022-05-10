import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
  // name = name.toLocaleLowerCase();

  // return getHeroesByName.filter((hero) =>
  //   hero.superhero.toLocaleLowerCase().includes(name)
  // );

  return [...heroes];
};
