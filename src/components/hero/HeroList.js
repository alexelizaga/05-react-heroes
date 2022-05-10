import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeoresByPublisher';


export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher( publisher );

  return (
    <div className="row g-3">
      {
        heroes.map( hero => (
          <HeroCard {...hero} key={ hero.id } />
        ))
      }
    </div>
  );
};
