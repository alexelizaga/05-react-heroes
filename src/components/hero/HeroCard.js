import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/${id}.jpg`;
  return (
    <div className='card'>
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
            <h5 className='card-title'>{superhero}</h5>
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
