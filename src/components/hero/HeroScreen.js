import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = getHeroesById(heroId);

  const handleReturn = () => {
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const imgPath = `/assets/${id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          className='img-thumbnail'
          src={imgPath}
          alt={superhero}
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className='mt-5'>Characters</h5>
        <p>{characters}</p>
        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
