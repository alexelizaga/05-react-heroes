import { useMemo } from 'react';

import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeoresByPublisher';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div
      className="row row-cols-6 row-cols-md-4 row-cols-lg-3 g-3 animate__animated animate__fadeIn"
    >
      {
        heroes.map( hero => (
          <HeroCard key={ hero.id } {...hero} />
        ))
      }
    </div>
  );
};
