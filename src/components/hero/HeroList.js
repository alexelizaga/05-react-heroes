import { getHeroesByPublisher } from "../../selectors/getHeoresByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher( publisher );

  return (
    <>
      <ul>
        {
          heroes.map( hero => (
            <li key={ hero.id }>
              { hero.superhero }
            </li>
          ))
        }
      </ul>
    </>
  )
};
