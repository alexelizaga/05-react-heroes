import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = heroImages(`./${id}.jpg`);
  return (
    <div className='d-flex p-1'>
      <div data-testid='HeroCard' className='card animate__animated animate__fadeIn'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img
              className='card-img-top'
              src={imagePath}
              alt={superhero}
            />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 data-testid='HeroCardSuperHero' className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              {
                (alter_ego !== characters) &&
                  <p className='text-muted'>{characters}</p>
              }
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
