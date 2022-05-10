import { heroes } from '../data/heroes';

export const getHeroeById = ( id ) => {
  console.log('getHeoreById call')
  return heroes.find( hero => hero.id === id );
}